import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

const VideoEnhancement = () => {
  const [transcript, setTranscript] = useState("");
  const [isTranscribing, setIsTranscribing] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [audioUrl, setAudioUrl] = useState("");
  const [selectedVoice, setSelectedVoice] = useState("alloy");

  const videoUrl = "https://drive.google.com/file/d/1pyt9TSzhW8Iyb_mZizWFmwrXr-PeeUSX/preview";

  const extractAudioFromVideo = async (): Promise<string> => {
    return new Promise((resolve, reject) => {
      const video = document.createElement('video');
      video.crossOrigin = "anonymous";
      video.src = videoUrl;
      
      video.addEventListener('loadedmetadata', () => {
        const audioContext = new AudioContext();
        const source = audioContext.createMediaElementSource(video);
        const dest = audioContext.createMediaStreamDestination();
        source.connect(dest);
        
        const mediaRecorder = new MediaRecorder(dest.stream);
        const chunks: Blob[] = [];
        
        mediaRecorder.ondataavailable = (e) => chunks.push(e.data);
        mediaRecorder.onstop = async () => {
          const blob = new Blob(chunks, { type: 'audio/webm' });
          const reader = new FileReader();
          reader.onloadend = () => {
            const base64 = (reader.result as string).split(',')[1];
            resolve(base64);
          };
          reader.readAsDataURL(blob);
        };
        
        mediaRecorder.start();
        video.play();
        
        video.addEventListener('ended', () => {
          mediaRecorder.stop();
          audioContext.close();
        });
      });
      
      video.addEventListener('error', (e) => {
        reject(new Error('Failed to load video'));
      });
    });
  };

  const handleTranscribe = async () => {
    setIsTranscribing(true);
    try {
      toast.info("Extracting audio from video...");
      const audioBase64 = await extractAudioFromVideo();
      
      toast.info("Transcribing audio...");
      const { data, error } = await supabase.functions.invoke('transcribe-audio', {
        body: { 
          audio: audioBase64,
          mimeType: 'audio/webm'
        }
      });

      if (error) throw error;
      
      setTranscript(data.text);
      toast.success("Transcription complete!");
    } catch (error) {
      console.error('Transcription error:', error);
      toast.error("Failed to transcribe audio. Please try again.");
    } finally {
      setIsTranscribing(false);
    }
  };

  const handleGenerateVoiceover = async () => {
    if (!transcript) {
      toast.error("Please transcribe the video first");
      return;
    }

    setIsGenerating(true);
    try {
      toast.info("Generating high-quality voiceover...");
      
      const { data, error } = await supabase.functions.invoke('text-to-speech', {
        body: { 
          text: transcript,
          voice: selectedVoice
        }
      });

      if (error) throw error;
      
      const audioBlob = new Blob(
        [Uint8Array.from(atob(data.audioContent), c => c.charCodeAt(0))],
        { type: 'audio/mpeg' }
      );
      const url = URL.createObjectURL(audioBlob);
      setAudioUrl(url);
      
      toast.success("Voiceover generated successfully!");
    } catch (error) {
      console.error('TTS error:', error);
      toast.error("Failed to generate voiceover. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const downloadAudio = () => {
    if (audioUrl) {
      const a = document.createElement('a');
      a.href = audioUrl;
      a.download = 'enhanced-voiceover.mp3';
      a.click();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95 py-12 px-4">
      <div className="container max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Video Enhancement Tool</h1>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Original Video</CardTitle>
            </CardHeader>
            <CardContent>
              <iframe
                src={videoUrl}
                className="w-full aspect-video rounded-lg"
                allow="autoplay"
                title="Original Video"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Enhanced Audio</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {audioUrl ? (
                <>
                  <audio controls className="w-full" src={audioUrl} />
                  <Button onClick={downloadAudio} className="w-full">
                    Download Enhanced Audio
                  </Button>
                </>
              ) : (
                <p className="text-muted-foreground text-center py-8">
                  Generate voiceover to preview audio
                </p>
              )}
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Transcript & Voice Generation</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-4">
              <Button 
                onClick={handleTranscribe} 
                disabled={isTranscribing}
                className="flex-1"
              >
                {isTranscribing && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {isTranscribing ? "Transcribing..." : "1. Transcribe Audio"}
              </Button>
            </div>

            <Textarea
              value={transcript}
              onChange={(e) => setTranscript(e.target.value)}
              placeholder="Transcript will appear here... (You can edit it before generating voiceover)"
              className="min-h-[200px]"
            />

            <div className="flex gap-4 items-end">
              <div className="flex-1">
                <label className="block text-sm font-medium mb-2">Voice</label>
                <Select value={selectedVoice} onValueChange={setSelectedVoice}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="alloy">Alloy (Neutral)</SelectItem>
                    <SelectItem value="echo">Echo (Male)</SelectItem>
                    <SelectItem value="fable">Fable (British Male)</SelectItem>
                    <SelectItem value="onyx">Onyx (Deep Male)</SelectItem>
                    <SelectItem value="nova">Nova (Female)</SelectItem>
                    <SelectItem value="shimmer">Shimmer (Soft Female)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button 
                onClick={handleGenerateVoiceover}
                disabled={isGenerating || !transcript}
                className="flex-1"
              >
                {isGenerating && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {isGenerating ? "Generating..." : "2. Generate Voiceover"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VideoEnhancement;

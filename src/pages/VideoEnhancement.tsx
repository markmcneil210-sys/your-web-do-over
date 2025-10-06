import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Loader2, Upload } from "lucide-react";

const VideoEnhancement = () => {
  const [transcript, setTranscript] = useState("");
  const [isTranscribing, setIsTranscribing] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [audioUrl, setAudioUrl] = useState("");
  const [selectedVoice, setSelectedVoice] = useState("alloy");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState("");

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      toast.success("File uploaded successfully!");
    }
  };

  const extractAudioFromFile = async (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = (reader.result as string).split(',')[1];
        resolve(base64);
      };
      reader.onerror = () => reject(new Error('Failed to read file'));
      reader.readAsDataURL(file);
    });
  };

  const handleTranscribe = async () => {
    if (!uploadedFile) {
      toast.error("Please upload a video or audio file first");
      return;
    }

    setIsTranscribing(true);
    try {
      toast.info("Processing audio file...");
      const audioBase64 = await extractAudioFromFile(uploadedFile);
      
      toast.info("Transcribing audio...");
      const { data, error } = await supabase.functions.invoke('transcribe-audio', {
        body: { 
          audio: audioBase64,
          mimeType: uploadedFile.type
        }
      });

      if (error) throw error;

      if (data?.error) {
        throw new Error(data.error);
      }
      
      setTranscript(data.text);
      toast.success("Transcription complete!");
    } catch (error) {
      console.error('Transcription error:', error);
      const errorMessage = error instanceof Error ? error.message : "Failed to transcribe audio. Please try again.";
      toast.error(errorMessage);
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
              <CardTitle>Upload Video/Audio</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col items-center justify-center border-2 border-dashed border-border rounded-lg p-8">
                <Upload className="h-12 w-12 text-muted-foreground mb-4" />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <Button variant="outline" asChild>
                    <span>Choose File</span>
                  </Button>
                </label>
                <input
                  id="file-upload"
                  type="file"
                  accept="video/*,audio/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <p className="text-sm text-muted-foreground mt-2">
                  {uploadedFile ? uploadedFile.name : "Support for video and audio files"}
                </p>
              </div>
              {previewUrl && uploadedFile?.type.startsWith('video') && (
                <video controls className="w-full rounded-lg" src={previewUrl} />
              )}
              {previewUrl && uploadedFile?.type.startsWith('audio') && (
                <audio controls className="w-full" src={previewUrl} />
              )}
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

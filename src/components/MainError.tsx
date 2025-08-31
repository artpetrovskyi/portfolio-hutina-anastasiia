import { AlertTriangle, RefreshCcw, Home } from "lucide-react";
import { Button } from "./ui/button";

interface MainErrorProps {
  error?: string | null;
  onRetry?: () => void;
}

export default function MainError({ error, onRetry }: MainErrorProps) {
  return (
    <div className="bg-background flex h-screen flex-col items-center justify-center gap-5 p-5 text-center">
      <AlertTriangle className="h-12 w-12 text-red-500" />
      <h1 className="text-2xl">Something went wrong | Щось пішло не так</h1>
      <p className="max-w-md">
        {error || "An unexpected error occurred. Please try again."}
      </p>
      <div className="mt-5 flex flex-wrap gap-5 [&>*]:flex-1">
        {onRetry && (
          <Button onClick={onRetry} variant="destructive" className="min-h-12">
            <RefreshCcw className="h-4 w-4" />
            Retry / Повторити
          </Button>
        )}
        <Button asChild className="min-h-12">
          <a href="/">
            <Home className="h-4 w-4" />
            Go Home / На головну
          </a>
        </Button>
      </div>
    </div>
  );
}

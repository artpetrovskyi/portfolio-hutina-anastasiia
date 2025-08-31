interface Props {
  text: string;
  error: string | null;
}

export default function LoadingError({ text, error }: Props) {
  return (
    <div className="flex min-h-28 flex-col justify-center text-center text-red-500">
      <p>{text}</p>
      {error && <p>{error}</p>}
    </div>
  );
}

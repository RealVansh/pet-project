import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 pt-24">
      <h2 className="text-4xl md:text-5xl font-bold text-forest-900 mb-4">Oops! This page ran away.</h2>
      <p className="text-taupe-600 text-lg mb-8 max-w-md">
        We can't seem to find the page you're looking for. Let's get you back on track.
      </p>
      <Link href="/">
        <Button size="lg">Go Home</Button>
      </Link>
    </div>
  );
}

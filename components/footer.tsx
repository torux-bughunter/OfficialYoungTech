import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container px-4 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Young Tech Pioneers. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-4">
          <Link href="/privacy" className="text-xs text-primary hover:underline">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-xs text-primary hover:underline">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  )
}


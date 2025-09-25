
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/573013411325"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-10 left-10 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all"
    >
      <MessageCircle className="w-10ñ h-10" />
    </a>
  );
}   

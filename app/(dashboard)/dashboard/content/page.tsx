import { PlaceholderState } from "@/components/shared/placeholder-state";
import { placeholderPages } from "@/constants/mock-data";

export default function ContentPage() {
  return <PlaceholderState {...placeholderPages.content} />;
}

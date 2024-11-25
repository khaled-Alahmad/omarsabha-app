import { fetchData } from "@/context/apiHelper";
import TestimonialsSection from "./TestimonialsSection";
export default async function Testimonials() {
  const data = await fetchData("public/home-data");
  const testimonials = data.data.testimonials || [];
  return <TestimonialsSection data={testimonials} />;
}

import Image from "next/image";
import Input from "../component/ui/Input";
import Textarea from "../component/ui/Textarea";
import UploadInput from "../component/ui/UploadInput";

export default function Home() {
  return (
    <main className="p-5 mt-5" >

      <Input iconName="at" iconType="fa" placeHolder="Nom" hasRightIcon inputStyle="GroupIcon" inputSize="lg" />
      <Input iconName="search" iconType="fa" placeHolder="Nom" hasRightIcon inputStyle="GroupIcon" inputSize="sm" />
      <Input iconName="at" iconType="fa" placeHolder="Nom" type="date" inputStyle="Minimalist"  />
      <Input iconName="at" iconType="fa" placeHolder="Nom" type="number" inputStyle="ModernFields"/>
      <Input iconName="at" iconType="fa" placeHolder="Nom" type="text" inputStyle="ModernFielsRadius" />
      <Textarea placeHolder="Mon contenu" textareaStyle="ModernFielsRadius" />
      <UploadInput />
    </main>
  );
}

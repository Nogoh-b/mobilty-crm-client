import Image from "next/image";
import Input from "../component/ui/Input";
import Textarea from "../component/ui/Textarea";
import UploadInput from "../component/ui/UploadInput";
import Alert from "../component/ui/Alert";
import Avatar from "../component/ui/Avatar";
import AvatarList from "../component/ui/AvatarList";
import Badge from "../component/ui/Badge";
import ButtonGroup from "../component/ui/ButtonGroup";

export default function Home() {
  return (
    <main className="p-5 mt-5" >

      <Input iconName="at" iconType="fa" placeHolder="Nom" hasRightIcon inputStyle="GroupIcon" inputSize="lg" />
      <Input iconName="search" iconType="fa" placeHolder="Nom" hasRightIcon inputStyle="GroupIcon" inputSize="sm" />
      <Input iconName="at" iconType="fa" placeHolder="Nom" type="date" inputStyle="Minimalist"  />
      <Input iconName="at" iconType="fa" placeHolder="Nom" type="number" inputStyle="ModernFields"/>
      <Input iconName="at" iconType="fa" placeHolder="Nom" type="text" inputStyle="ModernFielsRadius" />
      <Alert  message="<strong>Warning!</strong> Something went wrong. Please check." />

      <Alert  message="<strong>Warning!</strong> Something went wrong. Please check."  alertStyle="solid" iconName="heart" isRadius />
      <Alert  message="<strong>Warning!</strong> Something went wrong. Please check."  alertStyle="solid" alertType="danger" iconName="heart" hasCloseButton />
      <Alert  message="<strong>Warning!</strong> Something went wrong. Please check."  alertStyle="solid" alertType="dark" iconName="heart" hasCloseButton />
      <Alert  message="<strong>Warning!</strong> Something went wrong. Please check."  alertStyle="solid" alertType="info" iconName="heart" hasCloseButton isRadius/>
      <Alert  message="<strong>Warning!</strong> Something went wrong. Please check."  alertStyle="solid" alertType="warning" iconName="heart" />
      <Alert  message="<strong>Warning!</strong> Something went wrong. Please check."  alertStyle="solid" alertType="secondary" iconName="heart" />
      <Alert  message="<strong>Warning!</strong> Something went wrong. Please check."  alertStyle="solid" alertType="success" iconName="heart" />


      <Alert  message="<strong>Warning!</strong> Something went wrong. Please check."  alertStyle="light" iconName="heart" />
      <Alert  message="<strong>Warning!</strong> Something went wrong. Please check."  alertStyle="light" alertType="danger" iconName="heart" hasCloseButton />
      <Alert  message="<strong>Warning!</strong> Something went wrong. Please check."  alertStyle="light" alertType="dark" iconName="heart" />
      <Alert  message="<strong>Warning!</strong> Something went wrong. Please check."  alertStyle="light" alertType="info" iconName="heart" />
      <Alert  message="<strong>Warning!</strong> Something went wrong. Please check."  alertStyle="light" alertType="warning" iconName="heart" hasCloseButton />
      <Alert  message="<strong>Warning!</strong> Something went wrong. Please check."  alertStyle="light" alertType="secondary" iconName="heart" />
      <Alert  message="<strong>Warning!</strong> Something went wrong. Please check."  alertStyle="light" alertType="success" iconName="heart" />

      <div className="d-flex">
        <Avatar hasStatus size={35} />
        <Avatar hasStatus size={50} />
        <Avatar />
      </div>




      <Badge isOutLine isLight type="info" size="lg" text="bonjour" />
      <Badge isOutLine isLight type="warning" isCircle size="lg" text="05" />
      <Badge isOutLine isLight type="primary" size="sm" text="bonjour"  />
      <Badge  isLight type="danger" size="lg" text="bonjour"  />
      <Badge isOutLine type="warning" size="sm" text="bonjour"  />
      <Badge isOutLine type="warning" isCircle size="sm" text="1"  />


      <ButtonGroup type="secondary" datas={[{text:'BTN 1',link:'link1'},{text:'BTN 2',link:'link2'}]} />
      <ButtonGroup type="secondary" isVertical datas={[{text:'BTN 1',link:'link1'},{text:'BTN 2',link:'link2'}]} />
      
      <AvatarList  datas={['/assets/images/avatar/pic1.jpg','/assets/images/avatar/pic1.jpg','/assets/images/avatar/pic1.jpg','/assets/images/avatar/pic1.jpg']} />

      <Textarea   placeHolder="Mon contenu" textareaStyle="ModernFielsRadius" />
      <UploadInput />
    </main>
  );
}

"use client"
import Image from "next/image";
import Input from "../component/ui/Input";
import Textarea from "../component/ui/Textarea";
import UploadInput from "../component/ui/UploadInput";
import Alert from "../component/ui/Alert";
import Avatar from "../component/ui/Avatar";
import AvatarList from "../component/ui/AvatarList";
import Badge from "../component/ui/Badge";
import ButtonGroup from "../component/ui/ButtonGroup";
import Divider from "../component/ui/Divider";
import RangeSlider from "../component/ui/RangeSlider";
import Spinner from "../component/ui/spinner";
import Button from "../component/ui/Button";
import Stepper from "../component/ui/Stepper";
import Social from "../component/ui/Social";
import Treeview from "../component/ui/Treeview";
import Timeline from "../component/Timeline";
import Card from "../component/ui/Card";
import Chart from "../component/ui/Chart";
import PieChart from "../component/ui/PieChart";
import DoughnutChart from "../component/ui/DoughnutChart";
import PolarAreaChart from "../component/ui/PolarAreaChart";
import { DoughnutChartData, PieChartData, PolarAreaChartData } from "../constants/AppConstants";
import Dropdown from "../component/ui/Dropdown";

export default function Home() {

    
  const pieData: PieChartData = {
    labels: ['Red', 'Blue', 'Yellow', 'Grey'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [20, 50, 50, 90],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 205, 86)',
          'rgb(54, 162, 235)',
          'rgb(117, 187, 190)',
        ],
        hoverOffset: 4,
      },
    ],
  };

  const doughnutData: DoughnutChartData = {
    labels: ['Red', 'Blue', 'Yellow', 'Grey'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [30, 40, 50, 80],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 205, 86)',
          'rgb(54, 162, 235)',
          'rgb(117, 187, 190)',
        ],
        hoverOffset: 4,
      },
    ],
  };

  const polarAreaData: PolarAreaChartData = {
    labels: ['Red', 'Blue', 'Yellow', 'Grey'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [11, 16, 7, 3],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
          'rgb(117, 187, 190)',
        ],
      },
    ],
  };

  return (
    <main className="p-5 mt-5" >

      <div className="pb1-5 mb-5">
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


      <Divider color="danger" iconName="address-book" iconPosition="" text="Divider" />
      <Divider color="secondary" iconName="address-book" iconPosition="right" text=""  />
      <Divider color="primary" iconName="search" iconPosition="left" text=""  />
      <Divider color="info" iconName="search" iconPosition="left" hasLabel = {false} text="" type="dotted" />
      <Divider color="warning"  iconName="search" iconPosition="left" hasLabel = {false} text=""  type="dashed"  />


      {/* <RangeSlider /> */}
      <div className="row row-cols-4">
        <Button color="primary" size="sm" text="Boutton" isLight />
      </div>
      <div className="row row-cols-4">
        <Button color="primary" size="sm" text="Boutton" isLight />
        <Button color="primary" size="sm" text="Boutton"  />
        <Button color="info" size="lg" text="Salut" isOutline />
        <Button color="secondary" size="lg" text="Salut" isOutline isLoading />
      </div>


      <Spinner size="lg" color="danger" />
      <Spinner size="" color="info" />
      <Spinner color="primary" size="sm" />
      <Spinner color="primary" size="sm" />
      <div>
        <Spinner color="primary" size="sm" isGrow />
      </div>
      <div>
        <Spinner color="primary" size="lg" isGrow />
        <Spinner color="primary" size="md" isGrow />
      </div>
      
      <div>
        <Stepper color="primary" size="sm" isGrow />
      </div>
      
        <div>
          <Social  className="" text="" iconName="facebook" size="sm" isButtonIcon />
          <Social  className="" text="" iconName="facebook" size="lg" isButtonIcon isRounded />
          <Social  className="" text="" iconName="facebook" size="" isButtonIcon isRounded />
          <Social  className=" w-100" buttonType="email" iconName="ambulance" iconType="fa" text="email" />
          <Social  className=" w-100" buttonType="google" iconName="google" text="google" />
          <Social  className=" w-100" buttonType="twitter" iconName="twitter" text="twitter" />
          <Social  className=" w-100" buttonType="pinterest" iconName="pinterest" text="pinterest" />

          <Treeview />
          <Timeline isPanel color="primary" />
          <Timeline color="light" />
          <Card color="primary" title="ttile" content="Mon contenu" footerText="Footer text" cardLinkText="Link Text" />
          <Card color="danger" title="ttile" content="Mon contenu" footerText="Footer text" cardLinkText="Link Text" isFull />
          <Card color="" title="ttile" content="Mon contenu" footerText="Footer text" cardLinkText="Link Text" hasNavTab />
          <Card color="secondary" title="ttile" content="Mon contenu" footerText="Footer text" cardLinkText="Link Text" btnLink="" btnLinkText="Mon boutton" isFull />
          <Card color="danger" btnColor="secondary" title="ttile" content="Mon contenu" footerText="Footer text" cardLinkText="Link Text" btnLink="" btnLinkText="Mon boutton" isFull />
          <Card color="success" title="ttile" content="Mon contenu" footerText="Footer text" isContentCenter />
          <div>
            <h1>Chart Examples</h1>
            <div  className="w-25">
              <h2>Pie Chart</h2>
              <PieChart data={pieData} />
            </div>
            <div className="w-25">
              <h2>Doughnut Chart</h2>
              <DoughnutChart data={doughnutData} />
            </div>
            <div  className="w-25">
              <h2>Polar Area Chart</h2>
              <PolarAreaChart data={polarAreaData} />
            </div>
          </div>

        </div>

        <Dropdown />
      </div>


    </main>
  );
}

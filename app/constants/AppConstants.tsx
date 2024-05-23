

export const AppProps = {
    primary: '#FE9063',
    secondary: '#704FFE',

}
export type DataButtonGroup = {
    text: string,
    link?: string

}

export type InputType = 
  | "button"
  | "checkbox"
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "hidden"
  | "image"
  | "month"
  | "number"
  | "password"
  | "radio"
  | "range"
  | "reset"
  | "search"
  | "submit"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week";

export type Colors = 'black' | 'primary' | 'secondary' | 'success' | 'dark' | 'light' | 'info'  | 'white' | 'danger' | 'warning' | ''
export type InputStyle = 'GroupIcon' | 'ModernFields' | 'ModernFielsRadius' | 'Minimalist'
export type InputSize = 'lg' | 'sm' | ''
export type Size = 'lg' | 'sm' |  ''

export type IconSize = 'lg' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x';
// export type IconColor = 'black' | 'primary' | 'secondary' | 'succes' | 'dark' | 'light' | 'info' | 'danger' | 'warning';
export const colorsVariants ={black: '', primary: '#fe9063', secondary:'#704FFE', success:'#84CA93',dark:'#2F2F2F', white:'#fff', light:'#2F2F2F', info:'#A183E0', danger:'#f75a5b', warning:'#FFA902'}

export type AlertType = 'solid' | 'light'
// export type AlertStyle = 'black' | 'primary' | 'secondary' | 'succes' | 'dark' | 'light' | 'info' | 'danger' | 'warning';

export type PieChartData = {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
    hoverOffset: number;
  }[];
};



export type DoughnutChartData = {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
    hoverOffset: number;
  }[];
};

export type PolarAreaChartData = {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
  }[];
};

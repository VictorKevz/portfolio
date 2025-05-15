import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material/SvgIcon";
type MuiIconType = OverridableComponent<SvgIconTypeMap<object, "svg">>;

export type careerTab = "education" | "experience";

export type careerButtonsDataType = {
  id: careerTab;
  text: string;
  icon: MuiIconType;
};

export interface careerItem {
  id: number;
  title: string;
  year: string;
  description: string;
}
export type CareerData = {
  education: careerItem[];
  experience: careerItem[];
};

export type careerItemProps = {
  data: careerItem[];
  careerObject: careerButtonsDataType;
};

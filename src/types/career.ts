import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material/SvgIcon";
type MuiIconType = OverridableComponent<SvgIconTypeMap<object, "svg">>;

export type careerTab = "education" | "experience" | "certifications";

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
  image?: string;
  url?: string;
}
export type CareerData = {
  [key in careerTab]: careerItem[];
};

export type careerItemProps = {
  data: careerItem[];
  careerObject: careerButtonsDataType;
};

// Skills type...................................
export type SkillKey = "technical" | "soft";

export type Skill = {
  name: string;
  icon?: string;
};

export type SkillDataType = {
  [key in SkillKey]: Skill[];
};

export type ScrollingRowProps = {
  items: Skill[];
  direction: string;
  speed: number;
};

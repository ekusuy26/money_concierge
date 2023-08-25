// atoms
export interface ListTitleProps {
  title: string;
}
export interface SvgProps {
  slug: string;
  size?: number;
}
export interface ProgressBarProps {
  percent: number;
  colorCode: string;
  title: string;
  current: number;
  max: number;
  slug?: string;
}
// atoms
// molecules
export interface ButtonCategoryProps {
  id: number;
  name: string;
  slug: string;
  register: Object;
}
export interface ButtonFixedProps {
  callback: Function;
}
export interface ButtonMainMenuProps {
  title: string;
  href: string;
  slug: string;
  isActive: boolean;
}
// molecules
// organisms
export interface FormProps {
  finance?: any;
  callback: Function;
}
export interface ListProps {
  finances: Finance[];
  onListClick: (arg0: Finance) => void;
  onDelete: () => void;
}
export interface MainMenuProps {
  current: string;
}
// organisms

export interface Finance {
  id: number;
  item_name: string | null;
  amount: string;
  date: string;
  memo: string | null;
  formatDate: string;
  income_flg: boolean;
  category_id: number;
  category_name: string;
  slug: string;
}

export interface Chart {
  labels: string[];
  colors: string[];
  values: string[];
}
export interface List {
  id: number;
  name: string;
  slug: string;
  color: string;
  month: string;
  total_amount: string;
}
export interface Summary {
  chart: Chart;
  list: List[];
  payment: number;
}
export interface ReportSWR {
  [key: string]: Summary;
}

export interface Budget {
  variable_flg: number;
  budget: number;
  cost: number;
  cost_name: string;
  cost_percentage: number;
}
export type Budgets = Budget[];

export interface UserSession {
  id?: string | null | undefined;
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
}

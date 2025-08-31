export interface TreeNode {
  id: string;
  label: string;
  checked: boolean;
  indeterminate: boolean;
  children?: TreeNode[];
}

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  icon?: string;
}
declare module "@apps/types" {
  type AppSize = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

  interface DisplayAction {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    onToggle: () => void;
  }
}

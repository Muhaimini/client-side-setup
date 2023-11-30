interface ChildrenComponent {
  children: ReactNode;
}

interface ModalProps extends Partial<ChildrenComponent> {
  isOpen?: boolean;
  onClose?: () => void;
}

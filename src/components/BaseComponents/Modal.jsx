import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { CloseIcon, IconWrapper } from "@/data/Icons";

export function Modal({ isOpen, onRequestClose, modalHeader = {}, children }) {
	return (
		<Dialog open={isOpen} onOpenChange={onRequestClose}>
			<DialogContent className="[&>button]:hidden md:max-w-[500px] max-w-full !duration-300 !ease-linear pt-4 top-[unset] md:top-1/2 bottom-0 md:bottom-[unset] translate-y-0 !rounded-t-2xl md:!rounded-2xl gap-y-0 p-0 md:-translate-y-1/2">
				{modalHeader?.hasHeader && (
					<DialogHeader className={`flex items-center flex-row justify-between px-4 py-3.5 ${modalHeader?.style} `}>
						<DialogTitle className={`font-semibold text-xl ${modalHeader?.textStyle} ` ?? ""}>{modalHeader.modalTitle ?? ""}</DialogTitle>
						<button type="button" onClick={onRequestClose} className="ms-auto text-slate-500">
							<IconWrapper>
								<CloseIcon className="w-5 h-5" />
							</IconWrapper>
						</button>
					</DialogHeader>
				)}
				{children}
			</DialogContent>
		</Dialog>
	);
}

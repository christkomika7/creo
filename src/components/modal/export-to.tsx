import { FileDownIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"


export default function ExportTo() {
    const [open, setOpen] = useState(false);
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="amber" className="size-7.5 rounded-lg"><FileDownIcon className="size-3.5" /></Button>
            </DialogTrigger>
            <DialogContent className="w-80 p-0">
                <div className="space-y-4">
                    <div className="p-4 border-b">
                        <DialogTitle>Statement</DialogTitle>
                    </div>
                    <div className="px-4 pb-4 space-y-4">
                        <h2 className="text-sm font-medium">Selectionner le format</h2>

                        <div className="flex gap-x-2">
                        </div>
                        <div className="grid grid-cols-2 gap-x-2">
                            <Button variant="outline-destructive" onClick={() => setOpen(false)} >Annuler</Button>
                            <Button variant="action">Exporter</Button>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

import {
    FileUpload,
    FileUploadDropzone,
    FileUploadItem,
    FileUploadItemDelete,
    FileUploadItemMetadata,
    FileUploadItemPreview,
    FileUploadList,
    FileUploadTrigger,
} from "@/components/ui/file-upload";
import { FileUpIcon, XIcon } from "lucide-react";
import { MAX_FILE_SIZE, MAX_UPLOAD } from "@/lib/constant";
import { Button } from "./button";
import { Activity, useCallback, useId, useState } from "react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

type InputFileProps = {
    value?: File[];
    onChange: ((files: File[]) => void);
    accept?: string;
    multiple?: boolean;
    error?: string;
    required?: boolean;
    icon?: React.ReactNode;
    isFill?: boolean
}

export default function InputFile({
    value,
    onChange,
    accept = "application/pdf,.pdf",
    icon,
    multiple = true,
    error,
    required = false,
    isFill = false
}: InputFileProps) {
    const [invalidFiles, setInvalidFiles] = useState<Set<string>>(new Set());
    const errorId = useId();
    const descriptionId = useId();
    const isInvalid = !!error || invalidFiles.size > 0;

    const onUpload = useCallback(
        async (
            files: File[],
            {
                onProgress,
                onSuccess,
                onError,
            }: {
                onProgress: (file: File, progress: number) => void;
                onSuccess: (file: File) => void;
                onError: (file: File, error: Error) => void;
            },
        ) => {
            try {
                const uploadPromises = files.map(async (file) => {
                    try {
                        // Simulate file upload with progress
                        const totalChunks = 10;
                        let uploadedChunks = 0;

                        // Simulate chunk upload with delays
                        for (let i = 0; i < totalChunks; i++) {
                            // Simulate network delay (100-300ms per chunk)
                            await new Promise((resolve) =>
                                setTimeout(resolve, Math.random() * 200 + 100),
                            );

                            // Update progress for this specific file
                            uploadedChunks++;
                            const progress = (uploadedChunks / totalChunks) * 100;
                            onProgress(file, progress);
                        }

                        // Simulate server processing delay
                        await new Promise((resolve) => setTimeout(resolve, 500));

                        // Remove from invalid files on success
                        setInvalidFiles(prev => {
                            const next = new Set(prev);
                            next.delete(file.name);
                            return next;
                        });

                        onSuccess(file);
                    } catch (error) {
                        // Add to invalid files on error
                        setInvalidFiles(prev => new Set(prev).add(file.name));

                        onError(
                            file,
                            error instanceof Error ? error : new Error("Upload failed"),
                        );
                    }
                });

                // Wait for all uploads to complete
                await Promise.all(uploadPromises);
            } catch (error) {
                // This handles any error that might occur outside the individual upload processes
                console.error("Unexpected error during upload:", error);
            }
        },
        [],
    );

    const onFileValidate = useCallback(
        (file: File, currentFiles?: File[]): string | null => {
            // Validate max files
            if (currentFiles && currentFiles?.length >= MAX_UPLOAD) {
                return `Vous pouvez téléverser au maximum ${MAX_UPLOAD} fichiers.`;
            }

            // Validate file type (only pdf)
            if (file.type !== "application/pdf") {
                return "Seuls les fichiers PDF sont autorisés.";
            }

            // Validate file size (max 2MB)
            if (file.size > MAX_FILE_SIZE) {
                return `La taille du fichier ne doit pas dépasser ${MAX_FILE_SIZE / (1024 * 1024)} Mo.`;
            }

            return null;
        },
        [],
    );

    const onFileReject = useCallback((file: File, message: string) => {
        setInvalidFiles(prev => new Set(prev).add(file.name));

        toast("Fichier refusé", {
            description: `"${file.name.length > 20
                ? `${file.name.slice(0, 20)}...`
                : file.name}" : ${message}`,
        });
    }, []);


    const handleDelete = useCallback((fileName: string) => {
        // Remove from invalid files when deleted
        setInvalidFiles(prev => {
            const next = new Set(prev);
            next.delete(fileName);
            return next;
        });
    }, []);

    return (
        <div className={cn("space-y-2 ", {
            "bg-white rounded-md": isFill
        })}>
            <FileUpload
                maxFiles={MAX_UPLOAD}
                maxSize={MAX_FILE_SIZE}
                value={value}
                onUpload={onUpload}
                onValueChange={(e) => {
                    console.log({ e })
                    onChange(e);
                }}
                onFileValidate={(file) => onFileValidate(file, value)}
                onFileReject={onFileReject}
                accept={accept}
                multiple={multiple}
                aria-invalid={isInvalid}
                aria-describedby={cn(
                    descriptionId,
                    error && errorId
                )}
                aria-required={required}
            >
                <FileUploadDropzone className={cn(
                    isInvalid && "ring-3 ring-destructive/50 border-destructive ring-offset-2"
                )}>
                    <div className="flex flex-col items-center gap-1 text-center">
                        <Activity mode={!icon ? "visible" : "hidden"}>
                            <div className="flex items-center justify-center rounded-full border p-2.5">
                                <FileUpIcon className="size-6 text-emerald-background" />
                            </div>
                        </Activity>
                        <Activity mode={icon ? "visible" : "hidden"}>
                            {icon}
                        </Activity>
                        <p className="font-medium text-sm">Glissez-déposez vos fichiers ici</p>
                        <p
                            id={descriptionId}
                            className="text-muted-foreground text-xs"
                        >
                            Ou cliquez pour parcourir (max. {MAX_UPLOAD} fichiers, jusqu'à {MAX_FILE_SIZE / (1024 * 1024)} Mo chacun)
                        </p>
                    </div>
                    <FileUploadTrigger asChild>
                        <Button variant="secondary" size="sm" className="mt-2 w-fit">
                            Parcourir les fichiers
                        </Button>
                    </FileUploadTrigger>
                </FileUploadDropzone>
                <FileUploadList>
                    {value?.map((file, index) => (
                        <FileUploadItem
                            key={index}
                            value={file}
                            className={cn(
                                invalidFiles.has(file.name) && "ring-2 ring-destructive"
                            )}
                            aria-invalid={invalidFiles.has(file.name)}
                        >
                            <FileUploadItemPreview />
                            <FileUploadItemMetadata />
                            <FileUploadItemDelete
                                asChild
                                onClick={() => handleDelete(file.name)}
                            >
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="size-7"
                                    aria-label={`Supprimer ${file.name}`}
                                >
                                    <XIcon />
                                </Button>
                            </FileUploadItemDelete>
                        </FileUploadItem>
                    ))}
                </FileUploadList>
            </FileUpload>
        </div>
    )
}
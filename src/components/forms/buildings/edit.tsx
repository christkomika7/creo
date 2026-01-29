import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react"
import { useForm } from "react-hook-form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import InputFile from "@/components/ui/input-file";
import { buildingSchema, type BuildingSchemaType } from "@/lib/zod/building";
import { DatePicker } from "@/components/ui/date-picker";
import { FileUpIcon, ImageIcon } from "lucide-react";


export default function EditBuilding() {
    const [isLoading, setIsLoading] = useState(false);

    const form = useForm<BuildingSchemaType>({
        resolver: zodResolver(buildingSchema),
        defaultValues: {
            elevator: true,
            parking: true,
            pool: true,
            generator: true,
            waterBorehole: true,
            gym: true,
            garden: true
        }
    });

    async function submit(formData: BuildingSchemaType) {
        const { success, data } = buildingSchema.safeParse(formData);
        if (success) {
            setIsLoading(true);
            console.log({ data });
        }
    }

    return (
        <div className="bg-white rounded-md space-y-4 p-4">
            <h2 className="font-medium">Informations du bâtiment</h2>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(submit)}
                    className="space-y-4.5 w-full"
                >
                    <div className="grid grid-cols-3 gap-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem >
                                    <FormLabel className="text-neutral-600">Nom</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Entrer le nom complet"
                                            value={field.value}
                                            aria-invalid={!!form.formState.errors.name}
                                            onChange={field.onChange}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="location"
                            render={({ field }) => (
                                <FormItem >
                                    <FormLabel className="text-neutral-600">Localisation</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Entrer la localisation"
                                            value={field.value}
                                            aria-invalid={!!form.formState.errors.location}
                                            onChange={field.onChange}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="owner"
                            render={({ field }) => (
                                <FormItem >
                                    <FormLabel className="text-neutral-600">Propriétaire</FormLabel>
                                    <FormControl>
                                        <Select onValueChange={field.onChange} value={field.value} >
                                            <SelectTrigger className="w-full" aria-invalid={!!form.formState.errors.owner}>
                                                <SelectValue placeholder="Selectionner un propriétaire" />
                                            </SelectTrigger>
                                            <SelectContent position="popper" align="end">
                                                <SelectItem value="dark">Christ Komika</SelectItem>
                                                <SelectItem value="light">Orlando Komika</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="units"
                            render={({ field }) => (
                                <FormItem >
                                    <FormLabel className="text-neutral-600">Unité</FormLabel>
                                    <FormControl>
                                        <Select onValueChange={field.onChange} value={field.value} >
                                            <SelectTrigger className="w-full" aria-invalid={!!form.formState.errors.units}>
                                                <SelectValue placeholder="Selectionner une unité" />
                                            </SelectTrigger>
                                            <SelectContent position="popper" align="end">
                                                <SelectItem value="dark">12</SelectItem>
                                                <SelectItem value="light">4</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="contructionDate"
                            render={({ field }) => (
                                <FormItem >
                                    <FormLabel className="text-neutral-600">Date de construction</FormLabel>
                                    <FormControl>
                                        <DatePicker date={field.value} setDate={field.onChange} error={!!form.formState.errors.lotType} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="lotType"
                            render={({ field }) => (
                                <FormItem >
                                    <FormLabel className="text-neutral-600">Type de lot</FormLabel>
                                    <FormControl>
                                        <Select onValueChange={field.onChange} value={field.value} >
                                            <SelectTrigger className="w-full" aria-invalid={!!form.formState.errors.lotType}>
                                                <SelectValue placeholder="Selectionner un type de lot" />
                                            </SelectTrigger>
                                            <SelectContent position="popper" align="end">
                                                <SelectItem value="dark">12</SelectItem>
                                                <SelectItem value="light">4</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="floorNumber"
                            render={({ field }) => (
                                <FormItem >
                                    <FormLabel className="text-neutral-600">Nombre de porte</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="number"
                                            placeholder="Entrer le nombre de porte"
                                            value={field.value}
                                            aria-invalid={!!form.formState.errors.floorNumber}
                                            onChange={field.onChange}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="elevator"
                            render={({ field }) => (
                                <FormItem >
                                    <FormLabel className="text-neutral-600">Ascenseur</FormLabel>
                                    <FormControl>
                                        <Select onValueChange={e => field.onChange(e === "yes" ? true : false)} value={field.value ? "yes" : "no"} >
                                            <SelectTrigger className="w-full" aria-invalid={!!form.formState.errors.elevator}>
                                                <SelectValue placeholder="L'ascenseur est il present ?" />
                                            </SelectTrigger>
                                            <SelectContent position="popper" align="end">
                                                <SelectItem value="yes">Oui</SelectItem>
                                                <SelectItem value="no">Non</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="parking"
                            render={({ field }) => (
                                <FormItem >
                                    <FormLabel className="text-neutral-600">Parking</FormLabel>
                                    <FormControl>
                                        <Select onValueChange={e => field.onChange(e === "yes" ? true : false)} value={field.value ? "yes" : "no"} >
                                            <SelectTrigger className="w-full" aria-invalid={!!form.formState.errors.parking}>
                                                <SelectValue placeholder="" />
                                            </SelectTrigger>
                                            <SelectContent position="popper" align="end">
                                                <SelectItem value="yes">Oui</SelectItem>
                                                <SelectItem value="no">Non</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="parkingSpace"
                            render={({ field }) => (
                                <FormItem >
                                    <FormLabel className="text-neutral-600">Prix de l'espace parking</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="number"
                                            placeholder="Entrer le prix de l'espace parking"
                                            value={field.value}
                                            aria-invalid={!!form.formState.errors.parkingSpace}
                                            onChange={field.onChange}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="pool"
                            render={({ field }) => (
                                <FormItem >
                                    <FormLabel className="text-neutral-600">Piscine</FormLabel>
                                    <FormControl>
                                        <Select onValueChange={e => field.onChange(e === "available" ? true : false)} value={field.value ? "available" : "no-available"} >
                                            <SelectTrigger className="w-full" aria-invalid={!!form.formState.errors.pool}>
                                                <SelectValue placeholder="" />
                                            </SelectTrigger>
                                            <SelectContent position="popper" align="end">
                                                <SelectItem value="available">Présent</SelectItem>
                                                <SelectItem value="no-available">Absent</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="generator"
                            render={({ field }) => (
                                <FormItem >
                                    <FormLabel className="text-neutral-600">Groupe élèctrogène</FormLabel>
                                    <FormControl>
                                        <Select onValueChange={e => field.onChange(e === "available" ? true : false)} value={field.value ? "available" : "no-available"} >
                                            <SelectTrigger className="w-full" aria-invalid={!!form.formState.errors.generator}>
                                                <SelectValue placeholder="" />
                                            </SelectTrigger>
                                            <SelectContent position="popper" align="end">
                                                <SelectItem value="available">Présent</SelectItem>
                                                <SelectItem value="no-available">Absent</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="waterBorehole"
                            render={({ field }) => (
                                <FormItem >
                                    <FormLabel className="text-neutral-600">Bâche à eau</FormLabel>
                                    <FormControl>
                                        <Select onValueChange={e => field.onChange(e === "yes" ? true : false)} value={field.value ? "yes" : "no"} >
                                            <SelectTrigger className="w-full" aria-invalid={!!form.formState.errors.waterBorehole}>
                                                <SelectValue placeholder="" />
                                            </SelectTrigger>
                                            <SelectContent position="popper" align="end">
                                                <SelectItem value="yes">Oui</SelectItem>
                                                <SelectItem value="no">Non</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="gym"
                            render={({ field }) => (
                                <FormItem >
                                    <FormLabel className="text-neutral-600">Salle de sport</FormLabel>
                                    <FormControl>
                                        <Select onValueChange={e => field.onChange(e === "available" ? true : false)} value={field.value ? "available" : "no-available"} >
                                            <SelectTrigger className="w-full" aria-invalid={!!form.formState.errors.gym}>
                                                <SelectValue placeholder="" />
                                            </SelectTrigger>
                                            <SelectContent position="popper" align="end">
                                                <SelectItem value="available">Présent</SelectItem>
                                                <SelectItem value="no-available">Absent</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="garden"
                            render={({ field }) => (
                                <FormItem >
                                    <FormLabel className="text-neutral-600">Jardin</FormLabel>
                                    <FormControl>
                                        <Select onValueChange={e => field.onChange(e === "available" ? true : false)} value={field.value ? "available" : "no-available"} >
                                            <SelectTrigger className="w-full" aria-invalid={!!form.formState.errors.garden}>
                                                <SelectValue placeholder="" />
                                            </SelectTrigger>
                                            <SelectContent position="popper" align="end">
                                                <SelectItem value="available">Présent</SelectItem>
                                                <SelectItem value="no-available">Absent</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="status"
                            render={({ field }) => (
                                <FormItem >
                                    <FormLabel className="text-neutral-600">Gestion du status</FormLabel>
                                    <FormControl>
                                        <Select onValueChange={field.onChange} value={field.value} >
                                            <SelectTrigger className="w-full" aria-invalid={!!form.formState.errors.status}>
                                                <SelectValue placeholder="Selectionner un status" />
                                            </SelectTrigger>
                                            <SelectContent position="popper" align="end">
                                                <SelectItem value="dark">En cour</SelectItem>
                                                <SelectItem value="light">Terminer</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="map"
                            render={() => (
                                <FormItem >
                                    <FormLabel className="text-neutral-600">Google map</FormLabel>
                                    <FormControl>
                                        <Button variant="outline" className="h-10 shadow-none">Selectionner votre position</Button>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <FormField
                            control={form.control}
                            name="photo"
                            render={({ field }) => (
                                <FormItem >
                                    <FormControl>
                                        <InputFile multiple={false} value={field.value} onChange={field.onChange} error={form.formState.errors.photo?.message}
                                            icon={
                                                <div className="flex items-center bg-blue-600/5 justify-center rounded-full  p-2.5">
                                                    <ImageIcon className="size-6 text-blue-600" />
                                                </div>
                                            }
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="deeds"
                            render={({ field }) => (
                                <FormItem >
                                    <FormControl>
                                        <InputFile value={field.value} onChange={field.onChange} error={form.formState.errors.deeds?.message}
                                            icon={
                                                <div className="flex items-center bg-emerald-600/5 justify-center rounded-full  p-2.5">
                                                    <FileUpIcon className="size-6 text-emerald-600" />
                                                </div>
                                            }
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="documents"
                            render={({ field }) => (
                                <FormItem >
                                    <FormControl>
                                        <InputFile value={field.value} onChange={field.onChange} error={form.formState.errors.documents?.message}
                                            icon={
                                                <div className="flex items-center bg-amber-600/5 justify-center rounded-full  p-2.5">
                                                    <FileUpIcon className="size-6 text-amber-400" />
                                                </div>
                                            }
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>


                    <div className="flex justify-center">
                        <Button type="submit" variant="action" className="max-w-xl h-11">
                            {isLoading ? (
                                <span className="flex justify-center items-center">
                                    <Spinner />
                                </span>
                            ) : (
                                "Modifier"
                            )}
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    )
}

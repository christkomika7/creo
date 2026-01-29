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
import { unitSchema, type UnitSchemaType } from "@/lib/zod/units";


export default function EditUnit() {
    const [isLoading, setIsLoading] = useState(false);

    const form = useForm<UnitSchemaType>({
        resolver: zodResolver(unitSchema),
        defaultValues: {
            parking: false,
            gym: false,
            pool: false,
            garden: false,
            guard: false,
            camera: false,
            furnished: false
        }
    });

    async function submit(formData: UnitSchemaType) {
        const { success, data } = unitSchema.safeParse(formData);
        if (success) {
            setIsLoading(true);
            console.log({ data });
        }
    }

    return (
        <div className="bg-white rounded-md space-y-4 p-4">
            <h2 className="font-medium">Informations unité</h2>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(submit)}
                    className="space-y-4.5 w-full"
                >
                    <div className="grid grid-cols-3 gap-4">
                        <FormField
                            control={form.control}
                            name="type"
                            render={({ field }) => (
                                <FormItem >
                                    <FormLabel className="text-neutral-600">TYpe</FormLabel>
                                    <FormControl>
                                        <Select onValueChange={field.onChange} value={field.value} >
                                            <SelectTrigger className="w-full" aria-invalid={!!form.formState.errors.type}>
                                                <SelectValue placeholder="Selectionner un type" />
                                            </SelectTrigger>
                                            <SelectContent position="popper" align="end">
                                                <SelectItem value="dark">Type 1</SelectItem>
                                                <SelectItem value="light">Type 2</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="rentalStatus"
                            render={({ field }) => (
                                <FormItem >
                                    <FormLabel className="text-neutral-600">Statut de location</FormLabel>
                                    <FormControl>
                                        <Select onValueChange={field.onChange} value={field.value} >
                                            <SelectTrigger className="w-full" aria-invalid={!!form.formState.errors.rentalStatus}>
                                                <SelectValue placeholder="Selectionner un statut" />
                                            </SelectTrigger>
                                            <SelectContent position="popper" align="end">
                                                <SelectItem value="dark">Statut 1</SelectItem>
                                                <SelectItem value="light">Statut 2</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="surface"
                            render={({ field }) => (
                                <FormItem >
                                    <FormLabel className="text-neutral-600">Surface</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Entrer la valeur de la surface"
                                            value={field.value}
                                            aria-invalid={!!form.formState.errors.surface}
                                            onChange={field.onChange}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="floorType"
                            render={({ field }) => (
                                <FormItem >
                                    <FormLabel className="text-neutral-600">Floor type</FormLabel>
                                    <FormControl>
                                        <Select onValueChange={field.onChange} value={field.value} >
                                            <SelectTrigger className="w-full" aria-invalid={!!form.formState.errors.floorType}>
                                                <SelectValue placeholder="Selectionner un type" />
                                            </SelectTrigger>
                                            <SelectContent position="popper" align="end">
                                                <SelectItem value="dark">Valeur 1</SelectItem>
                                                <SelectItem value="light">Valeur 2</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="rooms"
                            render={({ field }) => (
                                <FormItem >
                                    <FormLabel className="text-neutral-600">Nombre de chambre</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="number"
                                            placeholder="Entrer le nombre de chambre"
                                            value={field.value}
                                            aria-invalid={!!form.formState.errors.rooms}
                                            onChange={field.onChange}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="rent"
                            render={({ field }) => (
                                <FormItem >
                                    <FormLabel className="text-neutral-600">Prix de location</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Entrer le prix de la location"
                                            value={field.value}
                                            aria-invalid={!!form.formState.errors.rent}
                                            onChange={field.onChange}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="furnished"
                            render={({ field }) => (
                                <FormItem >
                                    <FormLabel className="text-neutral-600">Meublé</FormLabel>
                                    <FormControl>
                                        <Select onValueChange={e => field.onChange(e === "yes" ? true : false)} value={field.value ? "yes" : "no"} >
                                            <SelectTrigger className="w-full" aria-invalid={!!form.formState.errors.furnished}>
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
                            name="pool"
                            render={({ field }) => (
                                <FormItem >
                                    <FormLabel className="text-neutral-600">Piscine</FormLabel>
                                    <FormControl>
                                        <Select onValueChange={e => field.onChange(e === "yes" ? true : false)} value={field.value ? "yes" : "no"} >
                                            <SelectTrigger className="w-full" aria-invalid={!!form.formState.errors.pool}>
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
                                        <Select onValueChange={e => field.onChange(e === "yes" ? true : false)} value={field.value ? "yes" : "no"} >
                                            <SelectTrigger className="w-full" aria-invalid={!!form.formState.errors.gym}>
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
                            name="garden"
                            render={({ field }) => (
                                <FormItem >
                                    <FormLabel className="text-neutral-600">Jardin</FormLabel>
                                    <FormControl>
                                        <Select onValueChange={e => field.onChange(e === "yes" ? true : false)} value={field.value ? "yes" : "no"} >
                                            <SelectTrigger className="w-full" aria-invalid={!!form.formState.errors.garden}>
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
                            name="guard"
                            render={({ field }) => (
                                <FormItem >
                                    <FormLabel className="text-neutral-600">Gardien</FormLabel>
                                    <FormControl>
                                        <Select onValueChange={e => field.onChange(e === "yes" ? true : false)} value={field.value ? "yes" : "no"} >
                                            <SelectTrigger className="w-full" aria-invalid={!!form.formState.errors.garden}>
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
                            name="camera"
                            render={({ field }) => (
                                <FormItem >
                                    <FormLabel className="text-neutral-600">Camera</FormLabel>
                                    <FormControl>
                                        <Select onValueChange={e => field.onChange(e === "yes" ? true : false)} value={field.value ? "yes" : "no"} >
                                            <SelectTrigger className="w-full" aria-invalid={!!form.formState.errors.camera}>
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
                            name="charges"
                            render={({ field }) => (
                                <FormItem >
                                    <FormLabel className="text-neutral-600">Prix des charges</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Entrer le prix des charges"
                                            value={field.value}
                                            aria-invalid={!!form.formState.errors.charges}
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
                            name="building"
                            render={({ field }) => (
                                <FormItem >
                                    <FormLabel className="text-neutral-600">Nom du bâtiment</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Entrer le nom du bâtiment"
                                            value={field.value}
                                            aria-invalid={!!form.formState.errors.building}
                                            onChange={field.onChange}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormField
                        control={form.control}
                        name="documents"
                        render={({ field }) => (
                            <FormItem >
                                <FormControl>
                                    <InputFile value={field.value} onChange={field.onChange} error={form.formState.errors.documents?.message} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="flex justify-center">
                        <Button type="submit" variant="action" className="max-w-xl h-11">
                            {isLoading ? (
                                <span className="flex justify-center items-center">
                                    <Spinner />
                                </span>
                            ) : (
                                "Enregistrer"
                            )}
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    )
}

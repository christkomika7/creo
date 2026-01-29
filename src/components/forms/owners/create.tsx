import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { ownerSchema, type OwnerSchemaType } from "@/lib/zod/owners";
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


export default function CreateOwners() {
    const [isLoading, setIsLoading] = useState(false);

    const form = useForm<OwnerSchemaType>({
        resolver: zodResolver(ownerSchema),
        defaultValues: {
            reference: crypto.randomUUID()
        },
    });

    async function submit(formData: OwnerSchemaType) {
        const { success, data } = ownerSchema.safeParse(formData);
        if (success) {
            setIsLoading(true);
            console.log({ data });
        }
    }

    return (
        <div className="bg-white rounded-md space-y-4 p-4">
            <h2 className="font-medium">Informations du propriétaire</h2>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(submit)}
                    className="space-y-4.5 w-full"
                >
                    <div className="grid grid-cols-3 gap-4">
                        <FormField
                            control={form.control}
                            name="reference"
                            render={({ field }) => (
                                <FormItem >
                                    <FormLabel className="text-neutral-600">Référence</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Entrer le numéro de référence"
                                            value={field.value}
                                            aria-invalid={!!form.formState.errors.reference}
                                            onChange={field.onChange}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
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
                            name="company"
                            render={({ field }) => (
                                <FormItem >
                                    <FormLabel className="text-neutral-600">Entreprise</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Entrer le nom de l'enterprise"
                                            value={field.value}
                                            aria-invalid={!!form.formState.errors.company}
                                            onChange={field.onChange}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem >
                                    <FormLabel className="text-neutral-600">Numéro de téléphone</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Entrer le numéro de téléphone"
                                            value={field.value}
                                            aria-invalid={!!form.formState.errors.phone}
                                            onChange={field.onChange}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem >
                                    <FormLabel className="text-neutral-600">Adresse email</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Entrer l'adresse email"
                                            value={field.value}
                                            aria-invalid={!!form.formState.errors.email}
                                            onChange={field.onChange}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="properties"
                            render={({ field }) => (
                                <FormItem >
                                    <FormLabel className="text-neutral-600">Biens associés</FormLabel>
                                    <FormControl>
                                        <Select onValueChange={field.onChange} value={field.value} >
                                            <SelectTrigger className="w-full" aria-invalid={!!form.formState.errors.properties}>
                                                <SelectValue placeholder="Selectionner une valeur" />
                                            </SelectTrigger>
                                            <SelectContent position="popper" align="end">
                                                <SelectItem value="light">Light</SelectItem>
                                                <SelectItem value="dark">Dark</SelectItem>
                                                <SelectItem value="system">System</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        <FormField
                            control={form.control}
                            name="units"
                            render={({ field }) => (
                                <FormItem >
                                    <FormLabel className="text-neutral-600">Le nombre d'unité</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Entrez le nombre d'unités"
                                            value={field.value}
                                            aria-invalid={!!form.formState.errors.units}
                                            onChange={field.onChange}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="revenue"
                            render={({ field }) => (
                                <FormItem >
                                    <FormLabel className="text-neutral-600">Revenu</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Entrez le revenu"
                                            value={field.value}
                                            aria-invalid={!!form.formState.errors.revenue}
                                            onChange={field.onChange}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="address"
                            render={({ field }) => (
                                <FormItem >
                                    <FormLabel className="text-neutral-600">Adresse</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Entrez l'adresse"
                                            value={field.value}
                                            aria-invalid={!!form.formState.errors.address}
                                            onChange={field.onChange}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="bank"
                            render={({ field }) => (
                                <FormItem >
                                    <FormLabel className="text-neutral-600">Informations bancaires</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Entrez les informations bancaires"
                                            value={field.value}
                                            aria-invalid={!!form.formState.errors.bank}
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

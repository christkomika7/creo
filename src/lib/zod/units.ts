import { z } from "zod";
import { ALLOWED_TYPES, MAX_FILE_SIZE } from "../constant";

export const unitSchema = z.object({
    type: z.string({ error: "Le type est requis." }),
    rentalStatus: z.string({ error: "Le statut de la location est requis." }),
    surface: z.string({ error: "La surface est requise." }),
    floorType: z.string({ error: "Le type de porte est requis." }),
    rooms: z.string({ error: "Le nombre de chambre est requis." }),
    rent: z.string({ error: "Le prix de la location est requis." }),
    furnished: z.boolean(),
    pool: z.boolean(),
    gym: z.boolean(),
    garden: z.boolean(),
    parking: z.boolean(),
    parkingSpace: z.string({ error: "La valeur de l'espace du parking est requise." }),
    guard: z.boolean(),
    camera: z.boolean(),
    charges: z.string({ error: "Le prix des charges est requis." }),
    owner: z.string({ error: "Le propriétaire est requis." }),
    building: z.string({ error: "Le nom du bâtiment est requis." }),

    documents: z.array(
        z
            .instanceof(File)
            .refine(
                (file) => ALLOWED_TYPES.includes(file.type),
                "Seuls les fichiers PDF et images sont autorisés"
            )
            .refine(
                (file) => file.size <= MAX_FILE_SIZE,
                "Chaque fichier ne doit pas dépasser 4 Mo"
            )
    ).optional(),

});


export type UnitSchemaType = z.infer<typeof unitSchema>;
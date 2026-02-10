import { z } from "zod";
import { ALLOWED_TYPES, MAX_FILE_SIZE } from "../constant";

export const buildingSchema = z.object({
    name: z.string({ error: "Le nom est requis." }),
    location: z.string({ error: "L'adresse est requis." }),
    owner: z.string({ error: "Le propriétaire est requis." }),
    units: z.string({ error: "L'unité est requis." }),
    contructionDate: z.date({ error: "La date de construction est requise." }),
    lotType: z.string({ error: "Le type de lot est requis." }),
    floorNumber: z.string({ error: "Le nombre de porte est requis." }),
    elevator: z.boolean(),
    parking: z.boolean(),
    parkingSpace: z.string({ error: "Le prix de l'espace parking est requis." }),
    pool: z.boolean(),
    generator: z.boolean(),
    waterBorehole: z.boolean(),
    gym: z.boolean(),
    garden: z.boolean(),
    status: z.string({ error: "La gestion du status est requis." }),
    map: z.string({ error: "La map est requise." }),
    photo: z.array(
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
    deeds: z.array(
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


export type BuildingSchemaType = z.infer<typeof buildingSchema>;
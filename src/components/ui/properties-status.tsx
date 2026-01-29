import { Status, StatusLabel } from "@/components/ui/status";

export type PropertiesStatusKey = 'office' | 'shop' | 'villa' | 'apartment';

const propertiesStatusData: Record<PropertiesStatusKey, string> = {
    "office": "Bureau",
    "shop": "Boutique",
    "villa": "Villa",
    "apartment": "Appartement"
}

type PropertiesStatusProps = {
    value: PropertiesStatusKey;
}


export default function PropertiesStatus({ value }: PropertiesStatusProps) {

    function getColor(value: PropertiesStatusKey) {
        switch (value) {
            case "office":
                return "emerald"
            case "shop":
                return "amber"
            case "villa":
                return "cyan"
            case "apartment":
                return "indigo"
        }

    }
    return (
        <Status variant={getColor(value)}>
            <StatusLabel>{propertiesStatusData[value]}</StatusLabel>
        </Status>
    )
}

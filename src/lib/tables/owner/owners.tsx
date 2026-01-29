import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import type { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDownIcon, Edit3Icon, EyeIcon, Trash2Icon } from "lucide-react";

export const data: Record<string, string | number | Date>[] = [
    {
        id: "m5gr84i9",
        reference: "REF001",
        name: "Ken",
        company: "Company A",
        phone: "1234567890",
        email: "ken99@example.com",
        properties: 2,
        units: 5,
        revenue: 316000,
        createdDate: new Date("2023-01-15")
    },
    {
        id: "3u1reuv4",
        reference: "REF002",
        name: "Abe",
        company: "Company B",
        phone: "2345678901",
        email: "Abe45@example.com",
        properties: 1,
        units: 3,
        revenue: (242),
        createdDate: new Date("2023-02-20")
    },
    {
        id: "derv1ws0",
        reference: "REF003",
        name: "Monserrat",
        company: "Company C",
        phone: "3456789012",
        email: "Monserrat44@example.com",
        properties: 3,
        units: 7,
        revenue: (837),
        createdDate: new Date("2023-03-10")
    },
    {
        id: "5kma53ae",
        reference: "REF004",
        name: "Silas",
        company: "Company D",
        phone: "4567890123",
        email: "Silas22@example.com",
        properties: 2,
        units: 4,
        revenue: (874),
        createdDate: new Date("2023-04-05")
    },
    {
        id: "bhqecj4p",
        reference: "REF005",
        name: "Carmella",
        company: "Company E",
        phone: "5678901234",
        email: "carmella@example.com",
        properties: 1,
        units: 2,
        revenue: (721),
        createdDate: new Date("2023-05-01")
    },
    {
        id: "bhqecj4pdf",
        reference: "REF005",
        name: "Carmella",
        company: "Company E",
        phone: "5678901234",
        email: "carmella@example.com",
        properties: 1,
        units: 2,
        revenue: (721),
        createdDate: new Date("2023-05-02")
    },
    {
        id: "bhqe4p",
        reference: "REF005",
        name: "Carmella",
        company: "Company E",
        phone: "5678901234",
        email: "carmella@example.com",
        properties: 1,
        units: 2,
        revenue: (721),
        createdDate: new Date("2023-05-03")
    },
    {
        id: "bhqesscj4p",
        reference: "REF005",
        name: "Carmella",
        company: "Company E",
        phone: "5678901234",
        email: "carmella@example.com",
        properties: 1,
        units: 2,
        revenue: (721),
        createdDate: new Date("2023-05-04")
    },
    {
        id: "becj4p",
        reference: "REF005",
        name: "Carmella",
        company: "Company E",
        phone: "5678901234",
        email: "carmella@example.com",
        properties: 1,
        units: 2,
        revenue: (721),
        createdDate: new Date("2023-05-05")
    },
]

export const columns: ColumnDef<Record<string, string | number | Date>>[] = [
    {
        accessorKey: "reference",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    className="text-sm! font-medium cursor-pointer text-left pl-0!"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Reference
                    <ArrowUpDownIcon className="size-3.5 text-neutral-500" />
                </Button>
            )
        },
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("reference")}</div>
        ),
    },
    {
        accessorKey: "name",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    className="text-sm! font-medium cursor-pointer text-left pl-0!"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Nom
                    <ArrowUpDownIcon className="size-3.5 text-neutral-500" />
                </Button>
            )
        },
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("name")}</div>
        ),
    },
    {
        accessorKey: "company",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    className="text-sm! font-medium cursor-pointer text-left pl-0!"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Entreprise
                    <ArrowUpDownIcon className="size-3.5 text-neutral-500" />
                </Button>
            )
        },
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("company")}</div>
        ),
    },
    {
        accessorKey: "phone",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    className="text-sm! font-medium cursor-pointer text-left pl-0!"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Téléphone
                    <ArrowUpDownIcon className="size-3.5 text-neutral-500" />
                </Button>
            )
        },
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("phone")}</div>
        ),
    },
    {
        accessorKey: "email",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    className="text-sm! font-medium cursor-pointer text-left pl-0!"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Email
                    <ArrowUpDownIcon className="size-3.5 text-neutral-500" />
                </Button>
            )
        },
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("email")}</div>
        ),
    },
    {
        accessorKey: "properties",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    className="text-sm! font-medium cursor-pointer text-left pl-0!"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Propriétés
                    <ArrowUpDownIcon className="size-3.5 text-neutral-500" />
                </Button>
            )
        },
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("properties")}</div>
        ),
    },
    {
        accessorKey: "units",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    className="text-sm! font-medium cursor-pointer text-left pl-0!"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Unités
                    <ArrowUpDownIcon className="size-3.5 text-neutral-500" />
                </Button>
            )
        },
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("units")}</div>
        ),
    },
    {
        accessorKey: "revenue",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    className="text-sm! font-medium cursor-pointer text-left pl-0!"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Revenue
                    <ArrowUpDownIcon className="size-3.5 text-neutral-500" />
                </Button>
            )
        },
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("revenue")}</div>
        ),
    },
    {
        id: "id",
        header: "Action",
        enableHiding: false,
        cell: ({ row }) => {
            return (
                <div className="flex gap-x-2">
                    <Link to="/dashboard/owners/edit-owner/$id" params={{ id: `edit_owner-${row.original.id}` as string }}>
                        <Button variant="outline" className="size-7.5 rounded-lg"><Edit3Icon className="size-3.5" /></Button>
                    </Link>
                    <Link to="/dashboard/owners/$id" params={{ id: `view_owner-${row.original.id}` as string }}>
                        <Button variant="secondary" className="size-7.5 rounded-lg"><EyeIcon className="size-3.5" /></Button>
                    </Link>
                    <Button variant="destructive" className="size-7.5 rounded-lg bg-red-400"><Trash2Icon className="size-3.5" /></Button>
                </div>
            )
        },
    },
]
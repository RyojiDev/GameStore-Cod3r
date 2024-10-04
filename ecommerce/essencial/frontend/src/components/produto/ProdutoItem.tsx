import Link from "next/link"
import { Produto } from "@/core"

export interface ProdutoItemProps {
    produto: Produto
}

export default function ProdutoItem(props: ProdutoItemProps) {
    const { produto } = props
    return <Link href={`/produto/${produto.id}`}
    className="flex flex-col">{produto.nome}</Link>
}
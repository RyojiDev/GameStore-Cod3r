import Link from "next/link"
import { Produto } from "@/core"
import Image from "next/image"
export interface ProdutoItemProps {
    produto: Produto
}

export default function ProdutoItem(props: ProdutoItemProps) {
    const { produto } = props
    return <Link href={`/produto/${produto.id}`}
    className="flex flex-col bg-violet-dark border boder-white/10 rounded-xl relative max-w-[350px]">
        <div className="h-48 w-full relative">
          <Image
          src={produto.imagem}
          fill
          alt='Imagem do produto'
          />  
        </div>
        {produto.nome}</Link>
}
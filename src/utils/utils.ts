export function slug(texto: string) {
    return (
        texto.toLowerCase()
            .replace(/[¿?:,]/g, "")
            .replace(/- /g, "")
            .replace(/[. ]/g, "_")
            .normalize("NFD").replace(/[\u0300-\u036f]/g, "")

    )
}
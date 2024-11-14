export default function Titulo({ children }: { children: React.ReactNode }) {
    return (
        <h1 className="text-2xl text-blue-500 font-extrabold pt-6 pb-2 border-b-4 border-blue-500">
            {children}
        </h1>
    );
}
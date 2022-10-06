export default function Tabela() {
let contatos = [
    {
        nome: 'Chiquim',
        telefone: '85 9 8888 66666',
        cidade: 'Caucaia-CE'
    },
    {
        nome: 'Sofia',
        telefone: '85 9 4002 8922',
        cidade: 'Maracanau-CE'
    },
    {
        nome: 'Joao',
        telefone: '85 9 8368 6546',
        cidade: 'Crato-CE'
    },
    {
        nome: 'Maria',
        telefone: '85 9 4525 5566',
        cidade: 'Fortaleza-CE'
    }
]

    return (
        <>
            <hr/>

            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th>Cidade</th>
                    </tr>
                </thead>
                <tbody>
                    {contatos.map((cont)=> {
                        return (
                            <tr>
                                <td>{cont.nome}</td>
                                <td>{cont.telefone}</td>
                                <td>{cont.cidade}</td>
                            </tr>
                         )
                    })}
                </tbody>
            </table>
        </>
    );

}
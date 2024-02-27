import { User } from '@/types'
import { useLoggedUser } from '@/contexts/loggedUser'
import { useEffect } from 'react'
import { UserServices } from './services'


export default function ProfileComponent({props,openForEdit}:{props:{auth: {user:User}},openForEdit:VoidFunction}) {
    const {user,setUser} = useLoggedUser()
    useEffect(()=>{
        setUser({...props.auth.user})
    },[])
    return (
        <div className="max-w-screen-md mx-auto p-5 mt-20">
            <div className="flex flex-col items-center gap-4 md:flex-row md:items-start">
                <div className="w-24 h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 overflow-hidden rounded-full shadow-lg">
                    <img src={props.auth.user.user_profile.image} alt="Profile" className="object-cover w-full h-full"/>
                </div>
                <div className="flex flex-col gap-2 text-center md:text-left">
                    <h1 className="text-2xl font-bold">{props.auth.user.user_profile.surname}</h1>
                    <div className='w-full text-start gap-x-6 gap-y-2 grid grid-cols-1 md:grid-cols-2 grid-rows-auto'>
                        <p className="text-sm truncate text-gray-600">Email: {props.auth.user.email}</p>
                        <p className="text-sm truncate text-gray-600">Telefone: {props.auth.user.user_profile.phone}</p>
                        <p className="text-sm truncate text-gray-600">Morada: {props.auth.user.user_profile.country}</p>
                        <p className="text-sm truncate text-gray-600">Loja: {props.auth.user.socialType ? 'Possui uma loja' : 'Não possui loja'}</p>
                        <a href="https://bosgc.sisgesc.net" target='_blank' className=''>Gerenciar seus clientes</a>
                    </div>

                    <div className="flex justify-center gap-4 mt-2 md:justify-start">
                        <button className="px-4 py-2 text-white rounded hover:bg-blue-700" style={{backgroundColor: "var(--buttonsColor)"}} onClick={openForEdit}>Editar Perfil</button>
                        {/* {!user.possuiLoja && <button className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-700" onClick={criarLoja}>Criar Loja</button>} */}
                    </div>
                </div>
            </div>
            <div className="mt-8">
                {/* <h2 className="text-xl font-semibold mb-4">Experiência Profissional & Projetos</h2>
                <div className="space-y-4">
                    <div>
                        <h3 className="text-lg font-semibold">Desenvolvedor Front-End</h3>
                        <p className="text-sm text-gray-600">Empresa X - Janeiro 2020 a Dezembro 2021</p>
                        <ul className="list-disc list-inside text-sm">
                            <li>Desenvolvimento de interfaces ricas com React e TailwindCSS.</li>
                            <li>Colaboração em projetos de desenvolvimento ágil com equipes globais.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Contribuições Open Source</h3>
                        <ul className="list-disc list-inside text-sm">
                            <li>Contribuições significativas para o projeto Y no GitHub.</li>
                            <li>Desenvolvimento de funcionalidades e correção de bugs.</li>
                        </ul>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

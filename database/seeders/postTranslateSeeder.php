<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class postTranslateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('posts')->insert([
            [
                'created_at'=>now(),
                'updated_at'=>now()
            ],
            [
                'created_at'=>now(),
                'updated_at'=>now()
            ],
            [
                'created_at'=>now(),
                'updated_at'=>now()
            ],
        ]);
        DB::table('post_translates')->insert([
            [
                'post_id'=>1,
                'local'=>'pt',
                'department'=>'Produtividade',
                'title'=>'Maximizando Sua Eficiência Comercial com SIGESC',
                'description'=>'Descubra como o SIGESC pode transformar a gestão da sua empresa, aumentando a eficiência e produtividade.',
                'image'=>'/img/capa.png'
            ],
            [
                'post_id'=>1,
                'local'=>'en',
                'department'=>'Productivity',
                'title'=>'Maximizing Your Commercial Efficiency with SIGESC',
                'description'=>"Discover how SIGESC can transform your company's management, increasing efficiency and productivity.",
                'image'=>'/img/capa.png'
            ],
            [
                'post_id'=>1,
                'local'=>'fr',
                'department'=>'Productivité',
                'title'=>'Maximiser votre efficacité commerciale avec SIGESC',
                "description"=>"Découvrez comment SIGESC peut transformer la gestion de votre entreprise, en augmentant l'efficacité et la productivité.",
                'image'=>'/img/capa.png'
            ],



            [
                'post_id'=>2,
                'local'=>'pt',
                'department'=>'Finanças',
                'title'=>'5 Estratégias para Melhorar o Fluxo de Caixa com SIGESC',
                'description'=>'Aprenda estratégias chave para otimizar o fluxo de caixa da sua empresa utilizando as funcionalidades avançadas do SIGESC.',
                'image'=>'/img/Sigesc Modulos disponiveis.png'
            ],
            [
                'post_id'=>2,
                'local'=>'en',
                'department'=>'Finance',
                'title'=>'5 Strategies to Improve Cash Flow with SIGESC',
                'description'=>"Learn key strategies to optimize your company's cash flow using SIGESC's advanced features.",
                'image'=>'/img/Sigesc Modulos disponiveis.png'
            ],
            [
                'post_id'=>2,
                'local'=>'fr',
                'department'=>'Finance',
                'title'=>'5 stratégies pour améliorer la trésorerie avec SIGESC',
                "description"=>"Apprenez les stratégies clés pour optimiser les flux de trésorerie de votre entreprise grâce aux fonctionnalités avancées de SIGESC.",
                'image'=>'/img/Sigesc Modulos disponiveis.png'
            ],



            [
                'post_id'=>3,
                'local'=>'pt',
                'department'=>'Integração',
                'title'=>'Maximizando Sua Eficiência Comercial com Integração do SIGESC com Outras Ferramentas de Negócios',
                'description'=>'Veja como o SIGESC se integra perfeitamente com outras ferramentas essenciais de negócios para proporcionar uma experiência unificada.',
                'image'=>'/img/SIGESC-SOFT Software de Gestão Integrado comercial transferencia de produtos.png'
            ],
            [
                'post_id'=>3,
                'local'=>'en',
                'department'=>'Integration',
                'title'=>"Maximiser votre efficacité commerciale grâce à l'intégration de SIGESC avec d'autres outils commerciaux",
                'description'=>"See how SIGESC seamlessly integrates with other essential business tools to provide a unified experience.",
                'image'=>'/img/SIGESC-SOFT Software de Gestão Integrado comercial transferencia de produtos.png'
            ],
            [
                'post_id'=>3,
                'local'=>'fr',
                'department'=>"L'intégration",
                'title'=>'Maximiser votre efficacité commerciale avec SIGESC',
                "description"=>"Découvrez comment SIGESC s'intègre de manière transparente à d'autres outils commerciaux essentiels pour offrir une expérience unifiée.",
                'image'=>'/img/SIGESC-SOFT Software de Gestão Integrado comercial transferencia de produtos.png'
            ],
        ]);
    }
}

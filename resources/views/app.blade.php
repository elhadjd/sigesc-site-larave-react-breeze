<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="shortcut icon" href="logo.ico" type="image/x-icon">
        {{-- <meta http-equiv="Content-Security-Policy" content="default-src 'self' https: ; script-src 'self' ; object-src 'none' "> --}}
        <meta name="description" content="Descubra a excelência operacional em nosso software de gestão integrado. Do PDV avançado ao controle financeiro e gestão de compras, nosso sistema oferece inovação, segurança e eficiência para impulsionar o sucesso do seu negócio.">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Blinker:wght@100;200;300;400;600;700;800;900&family=Lato&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
        <title>SIGESC-TECH Potencialize seu Negócio com Nosso Software de Gestão Integrado</title>

        @routes
        @viteReactRefresh
        @vite(['resources/js/app.tsx', "resources/js/Pages/{$page['component']}.tsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>

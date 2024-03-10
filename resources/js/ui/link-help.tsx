import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from '@inertiajs/react'

export default function LinkHelp({local}:{local: string}) {
    const {t} = useTranslation()
    return (
        <>
            <Link href={`/${local}/contact`} className="text-blue-600 hover:text-blue-800">{t('cards.contact.title')}</Link> {`${t('words.forHelp')} ${t('words.or')}`} <a href="https://geral.sisgesc.net/gettingStarted" target='_blank' className="text-blue-600 hover:text-blue-800 font-semibold">{t('words.requestDemo')}</a>
        </>
    )
}

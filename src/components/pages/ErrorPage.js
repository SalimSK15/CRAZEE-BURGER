import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <div>
      <h1>Erreurs 404 ("Page introuvable")</h1>
      <Link >Retourner vers la page d'accueil</Link>
    </div>
  )
}

export default ErrorPage

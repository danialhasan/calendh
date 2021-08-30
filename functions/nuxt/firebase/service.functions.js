

export default async function (session) {
  await import('firebase/functions')

  const functionsService = session.functions()

  return functionsService
}

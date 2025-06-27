export type Language = 'en' | 'es' | 'fr' | 'de';

export interface Translations {
  // Navigation
  home: string;
  rate: string;
  analytics: string;
  about: string;
  community: string;
  settings: string;

  // Home Page
  trustOMeter: string;
  rateEventsTransparent: string;
  simpleSecureAnonymous: string;
  instantRating: string;
  instantRatingDesc: string;
  blockchainVerified: string;
  blockchainVerifiedDesc: string;
  realTimeAnalytics: string;
  realTimeAnalyticsDesc: string;
  rateNow: string;
  viewAnalytics: string;
  activeUsers: string;
  totalRatings: string;
  averageRating: string;

  // Rating Page
  submitYourRating: string;
  rateYourExperience: string;
  yourRating: string;
  selectRating: string;
  poorExperience: string;
  belowAverage: string;
  averageExperience: string;
  goodExperience: string;
  excellentExperience: string;
  eventName: string;
  eventNamePlaceholder: string;
  eventLocation: string;
  eventLocationPlaceholder: string;
  submitRating: string;
  submitting: string;
  pleaseSelectRating: string;
  pleaseEnterEventName: string;
  pleaseEnterEventLocation: string;
  ratingSubmittedSuccess: string;
  failedToSubmitRating: string;
  errorSubmittingRating: string;
  pleaseWaitPrevious: string;

  // Analytics Page
  ratingAnalytics: string;
  transparentFeedback: string;
  recentRatings: string;
  refresh: string;
  ratingDistribution: string;
  numberOfBins: string;
  anonymousUser: string;

  // About Page
  aboutTrustOMeter: string;
  revolutionaryRating: string;
  ourMission: string;
  missionText1: string;
  missionText2: string;
  completeAnonymity: string;
  completeAnonymityDesc: string;
  immutableRecords: string;
  immutableRecordsDesc: string;
  instantVerification: string;
  instantVerificationDesc: string;
  realTimeAnalyticsFeature: string;
  realTimeAnalyticsFeatureDesc: string;
  howItWorks: string;
  submitYourRatingStep: string;
  submitYourRatingStepDesc: string;
  instantProcessing: string;
  instantProcessingDesc: string;
  blockchainRecording: string;
  blockchainRecordingDesc: string;
  viewAnalyticsStep: string;
  viewAnalyticsStepDesc: string;
  builtOnAlgorand: string;
  algorandText: string;
  instantTransactionFinality: string;
  minimalTransactionFees: string;
  carbonNegativeConsensus: string;
  provenSecurity: string;

  // Community Page
  communityHub: string;
  connectWithCommunity: string;
  recentActivity: string;
  topRatedEvents: string;
  communityGuidelines: string;
  ratingGuidelines: string;
  beHonestConstructive: string;
  rateBasedExperience: string;
  respectAnonymity: string;
  communityValues: string;
  transparencyHonesty: string;
  constructiveFeedback: string;
  respectParticipants: string;
  joinOurCommunity: string;
  connectWithUsers: string;
  joinDiscord: string;
  followUpdates: string;
  ratings: string;

  // Settings Page
  settingsTitle: string;
  customizeExperience: string;
  general: string;
  language: string;
  chooseLanguage: string;
  darkMode: string;
  switchDarkTheme: string;
  notifications: string;
  pushNotifications: string;
  receiveNotifications: string;
  privacyData: string;
  showInAnalytics: string;
  includeRatingsAnalytics: string;
  dataExport: string;
  ratingsStored: string;
  exportData: string;
  clearAllData: string;
  clearAllDataConfirm: string;
  actionCannotUndone: string;
  cancel: string;
  clearAll: string;

  // Time formats
  justNow: string;
  hoursAgo: string;
  daysAgo: string;
}

const translations: Record<Language, Translations> = {
  en: {
    // Navigation
    home: 'Home',
    rate: 'Rate',
    analytics: 'Analytics',
    about: 'About',
    community: 'Community',
    settings: 'Settings',

    // Home Page
    trustOMeter: 'Trust-O-Meter',
    rateEventsTransparent: 'Rate events with transparent, immutable feedback powered by Algorand',
    simpleSecureAnonymous: 'Simple, secure, and completely anonymous rating system',
    instantRating: 'Instant Rating',
    instantRatingDesc: 'Submit ratings quickly and anonymously with verification',
    blockchainVerified: 'Blockchain Verified',
    blockchainVerifiedDesc: 'Permanently recorded on Algorand for complete transparency',
    realTimeAnalytics: 'Real-time Analytics',
    realTimeAnalyticsDesc: 'View comprehensive statistics and trends in real-time',
    rateNow: 'Rate Now',
    viewAnalytics: 'View Analytics',
    activeUsers: 'Active Users',
    totalRatings: 'Total Ratings',
    averageRating: 'Average Rating',

    // Rating Page
    submitYourRating: 'Submit Your Rating',
    rateYourExperience: 'Rate your experience on the Algorand blockchain',
    yourRating: 'Your Rating',
    selectRating: 'Select a rating',
    poorExperience: '⭐ Poor experience',
    belowAverage: '⭐⭐ Below average',
    averageExperience: '⭐⭐⭐ Average experience',
    goodExperience: '⭐⭐⭐⭐ Good experience',
    excellentExperience: '⭐⭐⭐⭐⭐ Excellent experience',
    eventName: 'Event Name',
    eventNamePlaceholder: 'Type the name of the event...',
    eventLocation: 'Event Location',
    eventLocationPlaceholder: 'Enter the event location (e.g., Toronto, ON)',
    submitRating: 'Submit Rating',
    submitting: 'Submitting...',
    pleaseSelectRating: 'Please select a rating before submitting.',
    pleaseEnterEventName: 'Please enter an event name.',
    pleaseEnterEventLocation: 'Please enter an event Location...',
    ratingSubmittedSuccess: 'Rating submitted successfully to the blockchain!',
    failedToSubmitRating: 'Failed to submit rating. Please try again.',
    errorSubmittingRating: 'Error submitting rating. Please try again.',
    pleaseWaitPrevious: 'Please wait for previous rating to submit.',

    // Analytics Page
    ratingAnalytics: 'Rating Analytics',
    transparentFeedback: 'Transparent feedback powered by blockchain technology',
    recentRatings: 'Recent Ratings',
    refresh: 'Refresh',
    ratingDistribution: 'Rating Distribution',
    numberOfBins: 'Number of Bins',
    anonymousUser: 'Anonymous User',

    // About Page
    aboutTrustOMeter: 'About Trust-O-Meter',
    revolutionaryRating: 'A revolutionary rating system built on blockchain technology to ensure transparency, immutability, and complete anonymity in feedback collection.',
    ourMission: 'Our Mission',
    missionText1: 'Trust-O-Meter was created to solve the fundamental problem of trust in rating systems. Traditional platforms can manipulate, delete, or alter ratings, making it difficult to trust the authenticity of feedback.',
    missionText2: 'By leveraging the Algorand blockchain, we ensure that every rating is permanently recorded, completely transparent, and impossible to manipulate while maintaining user anonymity.',
    completeAnonymity: 'Complete Anonymity',
    completeAnonymityDesc: 'Your identity is never revealed. Rate freely without fear of retaliation or bias.',
    immutableRecords: 'Immutable Records',
    immutableRecordsDesc: 'Once submitted, ratings cannot be altered or deleted, ensuring permanent transparency.',
    instantVerification: 'Instant Verification',
    instantVerificationDesc: 'All ratings are instantly verified and recorded on the Algorand blockchain.',
    realTimeAnalyticsFeature: 'Real-time Analytics',
    realTimeAnalyticsFeatureDesc: 'View comprehensive statistics and trends based on authentic, unalterable data.',
    howItWorks: 'How It Works',
    submitYourRatingStep: 'Submit Your Rating',
    submitYourRatingStepDesc: 'Choose your rating and event type through our simple interface.',
    instantProcessing: 'Instant Processing',
    instantProcessingDesc: 'Your rating is processed and prepared for blockchain submission.',
    blockchainRecording: 'Blockchain Recording',
    blockchainRecordingDesc: 'Your rating is permanently recorded on the Algorand blockchain.',
    viewAnalyticsStep: 'View Analytics',
    viewAnalyticsStepDesc: 'Access real-time statistics and trends based on all submitted ratings.',
    builtOnAlgorand: 'Built on Algorand',
    algorandText: 'We chose Algorand for its exceptional speed, low transaction costs, and environmental sustainability. The Algorand blockchain provides the perfect foundation for our rating system with its:',
    instantTransactionFinality: 'Instant transaction finality',
    minimalTransactionFees: 'Minimal transaction fees',
    carbonNegativeConsensus: 'Carbon-negative consensus mechanism',
    provenSecurity: 'Proven security and decentralization',

    // Community Page
    communityHub: 'Community Hub',
    connectWithCommunity: 'Connect with our growing community of users who value transparent and honest feedback.',
    recentActivity: 'Recent Activity',
    topRatedEvents: 'Top Rated Events',
    communityGuidelines: 'Community Guidelines',
    ratingGuidelines: 'Rating Guidelines',
    beHonestConstructive: 'Be honest and constructive in your feedback',
    rateBasedExperience: 'Rate based on your actual experience',
    respectAnonymity: 'Respect the anonymity of the platform',
    communityValues: 'Community Values',
    transparencyHonesty: 'Transparency and honesty',
    constructiveFeedback: 'Constructive feedback',
    respectParticipants: 'Respect for all participants',
    joinOurCommunity: 'Join Our Community',
    connectWithUsers: 'Connect with other users, share feedback, and help build a more transparent rating ecosystem.',
    joinDiscord: 'Join Discord',
    followUpdates: 'Follow Updates',
    ratings: 'ratings',

    // Settings Page
    settingsTitle: 'Settings',
    customizeExperience: 'Customize your Trust-O-Meter experience',
    general: 'General',
    language: 'Language',
    chooseLanguage: 'Choose your preferred language',
    darkMode: 'Dark Mode',
    switchDarkTheme: 'Switch to dark theme',
    notifications: 'Notifications',
    pushNotifications: 'Push Notifications',
    receiveNotifications: 'Receive notifications about rating updates',
    privacyData: 'Privacy & Data',
    showInAnalytics: 'Show in Analytics',
    includeRatingsAnalytics: 'Include your ratings in public analytics',
    dataExport: 'Data Export',
    ratingsStored: 'rating stored locally',
    exportData: 'Export Data',
    clearAllData: 'Clear All Data',
    clearAllDataConfirm: 'Clear All Data?',
    actionCannotUndone: 'This action cannot be undone. All your ratings will be permanently deleted from local storage.',
    cancel: 'Cancel',
    clearAll: 'Clear All',

    // Time formats
    justNow: 'Just now',
    hoursAgo: 'h ago',
    daysAgo: 'd ago',
  },

  es: {
    // Navigation
    home: 'Inicio',
    rate: 'Calificar',
    analytics: 'Análisis',
    about: 'Acerca de',
    community: 'Comunidad',
    settings: 'Configuración',

    // Home Page
    trustOMeter: 'Trust-O-Meter',
    rateEventsTransparent: 'Califica eventos con comentarios transparentes e inmutables impulsados por Algorand',
    simpleSecureAnonymous: 'Sistema de calificación simple, seguro y completamente anónimo',
    instantRating: 'Calificación Instantánea',
    instantRatingDesc: 'Envía calificaciones rápida y anónimamente con verificación',
    blockchainVerified: 'Verificado por Blockchain',
    blockchainVerifiedDesc: 'Registrado permanentemente en Algorand para completa transparencia',
    realTimeAnalytics: 'Análisis en Tiempo Real',
    realTimeAnalyticsDesc: 'Ve estadísticas y tendencias completas en tiempo real',
    rateNow: 'Calificar Ahora',
    viewAnalytics: 'Ver Análisis',
    activeUsers: 'Usuarios Activos',
    totalRatings: 'Calificaciones Totales',
    averageRating: 'Calificación Promedio',

    // Rating Page
    submitYourRating: 'Envía tu Calificación',
    rateYourExperience: 'Califica tu experiencia en la blockchain de Algorand',
    yourRating: 'Tu Calificación',
    selectRating: 'Selecciona una calificación',
    poorExperience: '⭐ Experiencia pobre',
    belowAverage: '⭐⭐ Por debajo del promedio',
    averageExperience: '⭐⭐⭐ Experiencia promedio',
    goodExperience: '⭐⭐⭐⭐ Buena experiencia',
    excellentExperience: '⭐⭐⭐⭐⭐ Experiencia excelente',
    eventName: 'Nombre del Evento',
    eventNamePlaceholder: 'Escribe el nombre del evento...',
    eventLocation: 'Ubicación del Evento',
    eventLocationPlaceholder: 'Ingresa la ubicación del evento (ej., Toronto, ON)',
    submitRating: 'Enviar Calificación',
    submitting: 'Enviando...',
    pleaseSelectRating: 'Por favor selecciona una calificación antes de enviar.',
    pleaseEnterEventName: 'Por favor ingresa un nombre de evento.',
    pleaseEnterEventLocation: 'Por favor ingresa una ubicación del evento...',
    ratingSubmittedSuccess: '¡Calificación enviada exitosamente a la blockchain!',
    failedToSubmitRating: 'Error al enviar calificación. Por favor intenta de nuevo.',
    errorSubmittingRating: 'Error al enviar calificación. Por favor intenta de nuevo.',
    pleaseWaitPrevious: 'Por favor espera a que se envíe la calificación anterior.',

    // Analytics Page
    ratingAnalytics: 'Análisis de Calificaciones',
    transparentFeedback: 'Comentarios transparentes impulsados por tecnología blockchain',
    recentRatings: 'Calificaciones Recientes',
    refresh: 'Actualizar',
    ratingDistribution: 'Distribución de Calificaciones',
    numberOfBins: 'Número de Contenedores',
    anonymousUser: 'Usuario Anónimo',

    // About Page
    aboutTrustOMeter: 'Acerca de Trust-O-Meter',
    revolutionaryRating: 'Un sistema de calificación revolucionario construido sobre tecnología blockchain para asegurar transparencia, inmutabilidad y completo anonimato en la recolección de comentarios.',
    ourMission: 'Nuestra Misión',
    missionText1: 'Trust-O-Meter fue creado para resolver el problema fundamental de confianza en los sistemas de calificación. Las plataformas tradicionales pueden manipular, eliminar o alterar calificaciones, haciendo difícil confiar en la autenticidad de los comentarios.',
    missionText2: 'Al aprovechar la blockchain de Algorand, aseguramos que cada calificación sea registrada permanentemente, completamente transparente e imposible de manipular mientras mantenemos el anonimato del usuario.',
    completeAnonymity: 'Anonimato Completo',
    completeAnonymityDesc: 'Tu identidad nunca es revelada. Califica libremente sin temor a represalias o sesgo.',
    immutableRecords: 'Registros Inmutables',
    immutableRecordsDesc: 'Una vez enviadas, las calificaciones no pueden ser alteradas o eliminadas, asegurando transparencia permanente.',
    instantVerification: 'Verificación Instantánea',
    instantVerificationDesc: 'Todas las calificaciones son verificadas instantáneamente y registradas en la blockchain de Algorand.',
    realTimeAnalyticsFeature: 'Análisis en Tiempo Real',
    realTimeAnalyticsFeatureDesc: 'Ve estadísticas y tendencias completas basadas en datos auténticos e inalterables.',
    howItWorks: 'Cómo Funciona',
    submitYourRatingStep: 'Envía tu Calificación',
    submitYourRatingStepDesc: 'Elige tu calificación y tipo de evento a través de nuestra interfaz simple.',
    instantProcessing: 'Procesamiento Instantáneo',
    instantProcessingDesc: 'Tu calificación es procesada y preparada para envío a blockchain.',
    blockchainRecording: 'Registro en Blockchain',
    blockchainRecordingDesc: 'Tu calificación es registrada permanentemente en la blockchain de Algorand.',
    viewAnalyticsStep: 'Ver Análisis',
    viewAnalyticsStepDesc: 'Accede a estadísticas y tendencias en tiempo real basadas en todas las calificaciones enviadas.',
    builtOnAlgorand: 'Construido en Algorand',
    algorandText: 'Elegimos Algorand por su velocidad excepcional, bajos costos de transacción y sostenibilidad ambiental. La blockchain de Algorand proporciona la base perfecta para nuestro sistema de calificación con su:',
    instantTransactionFinality: 'Finalidad instantánea de transacciones',
    minimalTransactionFees: 'Tarifas mínimas de transacción',
    carbonNegativeConsensus: 'Mecanismo de consenso carbono-negativo',
    provenSecurity: 'Seguridad y descentralización probadas',

    // Community Page
    communityHub: 'Centro de Comunidad',
    connectWithCommunity: 'Conéctate con nuestra creciente comunidad de usuarios que valoran comentarios transparentes y honestos.',
    recentActivity: 'Actividad Reciente',
    topRatedEvents: 'Eventos Mejor Calificados',
    communityGuidelines: 'Pautas de la Comunidad',
    ratingGuidelines: 'Pautas de Calificación',
    beHonestConstructive: 'Sé honesto y constructivo en tus comentarios',
    rateBasedExperience: 'Califica basado en tu experiencia real',
    respectAnonymity: 'Respeta el anonimato de la plataforma',
    communityValues: 'Valores de la Comunidad',
    transparencyHonesty: 'Transparencia y honestidad',
    constructiveFeedback: 'Comentarios constructivos',
    respectParticipants: 'Respeto por todos los participantes',
    joinOurCommunity: 'Únete a Nuestra Comunidad',
    connectWithUsers: 'Conéctate con otros usuarios, comparte comentarios y ayuda a construir un ecosistema de calificación más transparente.',
    joinDiscord: 'Únete a Discord',
    followUpdates: 'Seguir Actualizaciones',
    ratings: 'calificaciones',

    // Settings Page
    settingsTitle: 'Configuración',
    customizeExperience: 'Personaliza tu experiencia de Trust-O-Meter',
    general: 'General',
    language: 'Idioma',
    chooseLanguage: 'Elige tu idioma preferido',
    darkMode: 'Modo Oscuro',
    switchDarkTheme: 'Cambiar a tema oscuro',
    notifications: 'Notificaciones',
    pushNotifications: 'Notificaciones Push',
    receiveNotifications: 'Recibir notificaciones sobre actualizaciones de calificaciones',
    privacyData: 'Privacidad y Datos',
    showInAnalytics: 'Mostrar en Análisis',
    includeRatingsAnalytics: 'Incluir tus calificaciones en análisis públicos',
    dataExport: 'Exportar Datos',
    ratingsStored: 'calificación almacenada localmente',
    exportData: 'Exportar Datos',
    clearAllData: 'Limpiar Todos los Datos',
    clearAllDataConfirm: '¿Limpiar Todos los Datos?',
    actionCannotUndone: 'Esta acción no se puede deshacer. Todas tus calificaciones serán eliminadas permanentemente del almacenamiento local.',
    cancel: 'Cancelar',
    clearAll: 'Limpiar Todo',

    // Time formats
    justNow: 'Ahora mismo',
    hoursAgo: 'h atrás',
    daysAgo: 'd atrás',
  },

  fr: {
    // Navigation
    home: 'Accueil',
    rate: 'Évaluer',
    analytics: 'Analyses',
    about: 'À propos',
    community: 'Communauté',
    settings: 'Paramètres',

    // Home Page
    trustOMeter: 'Trust-O-Meter',
    rateEventsTransparent: 'Évaluez les événements avec des commentaires transparents et immuables alimentés par Algorand',
    simpleSecureAnonymous: 'Système d\'évaluation simple, sécurisé et complètement anonyme',
    instantRating: 'Évaluation Instantanée',
    instantRatingDesc: 'Soumettez des évaluations rapidement et anonymement avec vérification',
    blockchainVerified: 'Vérifié par Blockchain',
    blockchainVerifiedDesc: 'Enregistré en permanence sur Algorand pour une transparence complète',
    realTimeAnalytics: 'Analyses en Temps Réel',
    realTimeAnalyticsDesc: 'Visualisez des statistiques et tendances complètes en temps réel',
    rateNow: 'Évaluer Maintenant',
    viewAnalytics: 'Voir les Analyses',
    activeUsers: 'Utilisateurs Actifs',
    totalRatings: 'Évaluations Totales',
    averageRating: 'Évaluation Moyenne',

    // Rating Page
    submitYourRating: 'Soumettez votre Évaluation',
    rateYourExperience: 'Évaluez votre expérience sur la blockchain Algorand',
    yourRating: 'Votre Évaluation',
    selectRating: 'Sélectionnez une évaluation',
    poorExperience: '⭐ Expérience médiocre',
    belowAverage: '⭐⭐ En dessous de la moyenne',
    averageExperience: '⭐⭐⭐ Expérience moyenne',
    goodExperience: '⭐⭐⭐⭐ Bonne expérience',
    excellentExperience: '⭐⭐⭐⭐⭐ Excellente expérience',
    eventName: 'Nom de l\'Événement',
    eventNamePlaceholder: 'Tapez le nom de l\'événement...',
    eventLocation: 'Lieu de l\'Événement',
    eventLocationPlaceholder: 'Entrez le lieu de l\'événement (ex., Toronto, ON)',
    submitRating: 'Soumettre l\'Évaluation',
    submitting: 'Soumission...',
    pleaseSelectRating: 'Veuillez sélectionner une évaluation avant de soumettre.',
    pleaseEnterEventName: 'Veuillez entrer un nom d\'événement.',
    pleaseEnterEventLocation: 'Veuillez entrer un lieu d\'événement...',
    ratingSubmittedSuccess: 'Évaluation soumise avec succès à la blockchain !',
    failedToSubmitRating: 'Échec de la soumission de l\'évaluation. Veuillez réessayer.',
    errorSubmittingRating: 'Erreur lors de la soumission de l\'évaluation. Veuillez réessayer.',
    pleaseWaitPrevious: 'Veuillez attendre que l\'évaluation précédente soit soumise.',

    // Analytics Page
    ratingAnalytics: 'Analyses des Évaluations',
    transparentFeedback: 'Commentaires transparents alimentés par la technologie blockchain',
    recentRatings: 'Évaluations Récentes',
    refresh: 'Actualiser',
    ratingDistribution: 'Distribution des Évaluations',
    numberOfBins: 'Nombre de Conteneurs',
    anonymousUser: 'Utilisateur Anonyme',

    // About Page
    aboutTrustOMeter: 'À propos de Trust-O-Meter',
    revolutionaryRating: 'Un système d\'évaluation révolutionnaire construit sur la technologie blockchain pour assurer la transparence, l\'immutabilité et l\'anonymat complet dans la collecte de commentaires.',
    ourMission: 'Notre Mission',
    missionText1: 'Trust-O-Meter a été créé pour résoudre le problème fondamental de confiance dans les systèmes d\'évaluation. Les plateformes traditionnelles peuvent manipuler, supprimer ou altérer les évaluations, rendant difficile la confiance en l\'authenticité des commentaires.',
    missionText2: 'En tirant parti de la blockchain Algorand, nous nous assurons que chaque évaluation est enregistrée de manière permanente, complètement transparente et impossible à manipuler tout en maintenant l\'anonymat de l\'utilisateur.',
    completeAnonymity: 'Anonymat Complet',
    completeAnonymityDesc: 'Votre identité n\'est jamais révélée. Évaluez librement sans crainte de représailles ou de biais.',
    immutableRecords: 'Enregistrements Immuables',
    immutableRecordsDesc: 'Une fois soumises, les évaluations ne peuvent pas être altérées ou supprimées, assurant une transparence permanente.',
    instantVerification: 'Vérification Instantanée',
    instantVerificationDesc: 'Toutes les évaluations sont instantanément vérifiées et enregistrées sur la blockchain Algorand.',
    realTimeAnalyticsFeature: 'Analyses en Temps Réel',
    realTimeAnalyticsFeatureDesc: 'Visualisez des statistiques et tendances complètes basées sur des données authentiques et inaltérables.',
    howItWorks: 'Comment Ça Marche',
    submitYourRatingStep: 'Soumettez votre Évaluation',
    submitYourRatingStepDesc: 'Choisissez votre évaluation et type d\'événement via notre interface simple.',
    instantProcessing: 'Traitement Instantané',
    instantProcessingDesc: 'Votre évaluation est traitée et préparée pour la soumission blockchain.',
    blockchainRecording: 'Enregistrement Blockchain',
    blockchainRecordingDesc: 'Votre évaluation est enregistrée de manière permanente sur la blockchain Algorand.',
    viewAnalyticsStep: 'Voir les Analyses',
    viewAnalyticsStepDesc: 'Accédez aux statistiques et tendances en temps réel basées sur toutes les évaluations soumises.',
    builtOnAlgorand: 'Construit sur Algorand',
    algorandText: 'Nous avons choisi Algorand pour sa vitesse exceptionnelle, ses faibles coûts de transaction et sa durabilité environnementale. La blockchain Algorand fournit la base parfaite pour notre système d\'évaluation avec ses :',
    instantTransactionFinality: 'Finalité instantanée des transactions',
    minimalTransactionFees: 'Frais de transaction minimaux',
    carbonNegativeConsensus: 'Mécanisme de consensus carbone-négatif',
    provenSecurity: 'Sécurité et décentralisation prouvées',

    // Community Page
    communityHub: 'Centre Communautaire',
    connectWithCommunity: 'Connectez-vous avec notre communauté croissante d\'utilisateurs qui valorisent les commentaires transparents et honnêtes.',
    recentActivity: 'Activité Récente',
    topRatedEvents: 'Événements les Mieux Notés',
    communityGuidelines: 'Directives Communautaires',
    ratingGuidelines: 'Directives d\'Évaluation',
    beHonestConstructive: 'Soyez honnête et constructif dans vos commentaires',
    rateBasedExperience: 'Évaluez basé sur votre expérience réelle',
    respectAnonymity: 'Respectez l\'anonymat de la plateforme',
    communityValues: 'Valeurs Communautaires',
    transparencyHonesty: 'Transparence et honnêteté',
    constructiveFeedback: 'Commentaires constructifs',
    respectParticipants: 'Respect pour tous les participants',
    joinOurCommunity: 'Rejoignez Notre Communauté',
    connectWithUsers: 'Connectez-vous avec d\'autres utilisateurs, partagez des commentaires et aidez à construire un écosystème d\'évaluation plus transparent.',
    joinDiscord: 'Rejoindre Discord',
    followUpdates: 'Suivre les Mises à Jour',
    ratings: 'évaluations',

    // Settings Page
    settingsTitle: 'Paramètres',
    customizeExperience: 'Personnalisez votre expérience Trust-O-Meter',
    general: 'Général',
    language: 'Langue',
    chooseLanguage: 'Choisissez votre langue préférée',
    darkMode: 'Mode Sombre',
    switchDarkTheme: 'Passer au thème sombre',
    notifications: 'Notifications',
    pushNotifications: 'Notifications Push',
    receiveNotifications: 'Recevoir des notifications sur les mises à jour d\'évaluations',
    privacyData: 'Confidentialité et Données',
    showInAnalytics: 'Afficher dans les Analyses',
    includeRatingsAnalytics: 'Inclure vos évaluations dans les analyses publiques',
    dataExport: 'Export de Données',
    ratingsStored: 'évaluation stockée localement',
    exportData: 'Exporter les Données',
    clearAllData: 'Effacer Toutes les Données',
    clearAllDataConfirm: 'Effacer Toutes les Données ?',
    actionCannotUndone: 'Cette action ne peut pas être annulée. Toutes vos évaluations seront définitivement supprimées du stockage local.',
    cancel: 'Annuler',
    clearAll: 'Tout Effacer',

    // Time formats
    justNow: 'À l\'instant',
    hoursAgo: 'h il y a',
    daysAgo: 'j il y a',
  },

  de: {
    // Navigation
    home: 'Startseite',
    rate: 'Bewerten',
    analytics: 'Analysen',
    about: 'Über uns',
    community: 'Gemeinschaft',
    settings: 'Einstellungen',

    // Home Page
    trustOMeter: 'Trust-O-Meter',
    rateEventsTransparent: 'Bewerten Sie Veranstaltungen mit transparentem, unveränderlichem Feedback, angetrieben von Algorand',
    simpleSecureAnonymous: 'Einfaches, sicheres und vollständig anonymes Bewertungssystem',
    instantRating: 'Sofortige Bewertung',
    instantRatingDesc: 'Bewertungen schnell und anonym mit Verifizierung einreichen',
    blockchainVerified: 'Blockchain-Verifiziert',
    blockchainVerifiedDesc: 'Dauerhaft auf Algorand für vollständige Transparenz aufgezeichnet',
    realTimeAnalytics: 'Echtzeit-Analysen',
    realTimeAnalyticsDesc: 'Umfassende Statistiken und Trends in Echtzeit anzeigen',
    rateNow: 'Jetzt Bewerten',
    viewAnalytics: 'Analysen Anzeigen',
    activeUsers: 'Aktive Benutzer',
    totalRatings: 'Gesamtbewertungen',
    averageRating: 'Durchschnittsbewertung',

    // Rating Page
    submitYourRating: 'Ihre Bewertung Einreichen',
    rateYourExperience: 'Bewerten Sie Ihre Erfahrung auf der Algorand-Blockchain',
    yourRating: 'Ihre Bewertung',
    selectRating: 'Bewertung auswählen',
    poorExperience: '⭐ Schlechte Erfahrung',
    belowAverage: '⭐⭐ Unterdurchschnittlich',
    averageExperience: '⭐⭐⭐ Durchschnittliche Erfahrung',
    goodExperience: '⭐⭐⭐⭐ Gute Erfahrung',
    excellentExperience: '⭐⭐⭐⭐⭐ Ausgezeichnete Erfahrung',
    eventName: 'Veranstaltungsname',
    eventNamePlaceholder: 'Geben Sie den Namen der Veranstaltung ein...',
    eventLocation: 'Veranstaltungsort',
    eventLocationPlaceholder: 'Geben Sie den Veranstaltungsort ein (z.B. Toronto, ON)',
    submitRating: 'Bewertung Einreichen',
    submitting: 'Wird eingereicht...',
    pleaseSelectRating: 'Bitte wählen Sie eine Bewertung vor dem Einreichen.',
    pleaseEnterEventName: 'Bitte geben Sie einen Veranstaltungsnamen ein.',
    pleaseEnterEventLocation: 'Bitte geben Sie einen Veranstaltungsort ein...',
    ratingSubmittedSuccess: 'Bewertung erfolgreich zur Blockchain eingereicht!',
    failedToSubmitRating: 'Fehler beim Einreichen der Bewertung. Bitte versuchen Sie es erneut.',
    errorSubmittingRating: 'Fehler beim Einreichen der Bewertung. Bitte versuchen Sie es erneut.',
    pleaseWaitPrevious: 'Bitte warten Sie, bis die vorherige Bewertung eingereicht wurde.',

    // Analytics Page
    ratingAnalytics: 'Bewertungsanalysen',
    transparentFeedback: 'Transparentes Feedback angetrieben von Blockchain-Technologie',
    recentRatings: 'Aktuelle Bewertungen',
    refresh: 'Aktualisieren',
    ratingDistribution: 'Bewertungsverteilung',
    numberOfBins: 'Anzahl der Behälter',
    anonymousUser: 'Anonymer Benutzer',

    // About Page
    aboutTrustOMeter: 'Über Trust-O-Meter',
    revolutionaryRating: 'Ein revolutionäres Bewertungssystem auf Blockchain-Technologie aufgebaut, um Transparenz, Unveränderlichkeit und vollständige Anonymität bei der Feedback-Sammlung zu gewährleisten.',
    ourMission: 'Unsere Mission',
    missionText1: 'Trust-O-Meter wurde geschaffen, um das grundlegende Vertrauensproblem in Bewertungssystemen zu lösen. Traditionelle Plattformen können Bewertungen manipulieren, löschen oder ändern, was es schwierig macht, der Authentizität des Feedbacks zu vertrauen.',
    missionText2: 'Durch die Nutzung der Algorand-Blockchain stellen wir sicher, dass jede Bewertung dauerhaft aufgezeichnet, vollständig transparent und unmöglich zu manipulieren ist, während die Benutzeranonymität gewahrt bleibt.',
    completeAnonymity: 'Vollständige Anonymität',
    completeAnonymityDesc: 'Ihre Identität wird niemals preisgegeben. Bewerten Sie frei ohne Angst vor Vergeltung oder Voreingenommenheit.',
    immutableRecords: 'Unveränderliche Aufzeichnungen',
    immutableRecordsDesc: 'Einmal eingereicht, können Bewertungen nicht geändert oder gelöscht werden, was dauerhafte Transparenz gewährleistet.',
    instantVerification: 'Sofortige Verifizierung',
    instantVerificationDesc: 'Alle Bewertungen werden sofort verifiziert und auf der Algorand-Blockchain aufgezeichnet.',
    realTimeAnalyticsFeature: 'Echtzeit-Analysen',
    realTimeAnalyticsFeatureDesc: 'Umfassende Statistiken und Trends basierend auf authentischen, unveränderbaren Daten anzeigen.',
    howItWorks: 'Wie Es Funktioniert',
    submitYourRatingStep: 'Ihre Bewertung Einreichen',
    submitYourRatingStepDesc: 'Wählen Sie Ihre Bewertung und Veranstaltungstyp über unsere einfache Benutzeroberfläche.',
    instantProcessing: 'Sofortige Verarbeitung',
    instantProcessingDesc: 'Ihre Bewertung wird verarbeitet und für die Blockchain-Einreichung vorbereitet.',
    blockchainRecording: 'Blockchain-Aufzeichnung',
    blockchainRecordingDesc: 'Ihre Bewertung wird dauerhaft auf der Algorand-Blockchain aufgezeichnet.',
    viewAnalyticsStep: 'Analysen Anzeigen',
    viewAnalyticsStepDesc: 'Zugriff auf Echtzeit-Statistiken und Trends basierend auf allen eingereichten Bewertungen.',
    builtOnAlgorand: 'Auf Algorand Aufgebaut',
    algorandText: 'Wir haben Algorand wegen seiner außergewöhnlichen Geschwindigkeit, niedrigen Transaktionskosten und Umweltverträglichkeit gewählt. Die Algorand-Blockchain bietet die perfekte Grundlage für unser Bewertungssystem mit ihren:',
    instantTransactionFinality: 'Sofortige Transaktionsendgültigkeit',
    minimalTransactionFees: 'Minimale Transaktionsgebühren',
    carbonNegativeConsensus: 'Kohlenstoff-negativer Konsensmechanismus',
    provenSecurity: 'Bewährte Sicherheit und Dezentralisierung',

    // Community Page
    communityHub: 'Gemeinschaftszentrum',
    connectWithCommunity: 'Verbinden Sie sich mit unserer wachsenden Gemeinschaft von Benutzern, die transparentes und ehrliches Feedback schätzen.',
    recentActivity: 'Aktuelle Aktivität',
    topRatedEvents: 'Bestbewertete Veranstaltungen',
    communityGuidelines: 'Gemeinschaftsrichtlinien',
    ratingGuidelines: 'Bewertungsrichtlinien',
    beHonestConstructive: 'Seien Sie ehrlich und konstruktiv in Ihrem Feedback',
    rateBasedExperience: 'Bewerten Sie basierend auf Ihrer tatsächlichen Erfahrung',
    respectAnonymity: 'Respektieren Sie die Anonymität der Plattform',
    communityValues: 'Gemeinschaftswerte',
    transparencyHonesty: 'Transparenz und Ehrlichkeit',
    constructiveFeedback: 'Konstruktives Feedback',
    respectParticipants: 'Respekt für alle Teilnehmer',
    joinOurCommunity: 'Treten Sie Unserer Gemeinschaft Bei',
    connectWithUsers: 'Verbinden Sie sich mit anderen Benutzern, teilen Sie Feedback und helfen Sie beim Aufbau eines transparenteren Bewertungsökosystems.',
    joinDiscord: 'Discord Beitreten',
    followUpdates: 'Updates Folgen',
    ratings: 'Bewertungen',

    // Settings Page
    settingsTitle: 'Einstellungen',
    customizeExperience: 'Passen Sie Ihre Trust-O-Meter-Erfahrung an',
    general: 'Allgemein',
    language: 'Sprache',
    chooseLanguage: 'Wählen Sie Ihre bevorzugte Sprache',
    darkMode: 'Dunkler Modus',
    switchDarkTheme: 'Zum dunklen Thema wechseln',
    notifications: 'Benachrichtigungen',
    pushNotifications: 'Push-Benachrichtigungen',
    receiveNotifications: 'Benachrichtigungen über Bewertungsupdates erhalten',
    privacyData: 'Datenschutz & Daten',
    showInAnalytics: 'In Analysen Anzeigen',
    includeRatingsAnalytics: 'Ihre Bewertungen in öffentliche Analysen einbeziehen',
    dataExport: 'Datenexport',
    ratingsStored: 'Bewertung lokal gespeichert',
    exportData: 'Daten Exportieren',
    clearAllData: 'Alle Daten Löschen',
    clearAllDataConfirm: 'Alle Daten Löschen?',
    actionCannotUndone: 'Diese Aktion kann nicht rückgängig gemacht werden. Alle Ihre Bewertungen werden dauerhaft aus dem lokalen Speicher gelöscht.',
    cancel: 'Abbrechen',
    clearAll: 'Alles Löschen',

    // Time formats
    justNow: 'Gerade eben',
    hoursAgo: 'Std. her',
    daysAgo: 'T. her',
  },
};

export function getCurrentLanguage(): Language {
  const savedSettings = localStorage.getItem('trust-o-meter-settings');
  if (savedSettings) {
    const settings = JSON.parse(savedSettings);
    return settings.language || 'en';
  }
  return 'en';
}

export function getTranslations(): Translations {
  const currentLanguage = getCurrentLanguage();
  return translations[currentLanguage];
}

export function t(key: keyof Translations): string {
  const translations = getTranslations();
  return translations[key] || key;
}
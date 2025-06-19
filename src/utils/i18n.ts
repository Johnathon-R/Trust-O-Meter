// Internationalization utilities
export type Language = 'en' | 'es' | 'fr' | 'nl';

export interface Translations {
  // Navigation
  nav: {
    home: string;
    rate: string;
    analytics: string;
    about: string;
    community: string;
    settings: string;
  };
  
  // Home Page
  home: {
    title: string;
    subtitle: string;
    description: string;
    features: {
      rating: {
        title: string;
        description: string;
      };
      blockchain: {
        title: string;
        description: string;
      };
      analytics: {
        title: string;
        description: string;
      };
    };
    buttons: {
      rateNow: string;
      viewAnalytics: string;
    };
    stats: {
      activeUsers: string;
      totalRatings: string;
      averageRating: string;
    };
  };
  
  // Rating Page
  rating: {
    title: string;
    subtitle: string;
    yourRating: string;
    eventType: string;
    selectEvent: string;
    customEvent: string;
    customEventPlaceholder: string;
    submitRating: string;
    submitting: string;
    selectRatingFirst: string;
    enterCustomEvent: string;
    selectEventType: string;
    submittingToBlockchain: string;
    ratingSubmitted: string;
    submissionFailed: string;
    submissionError: string;
    ratingDescriptions: {
      selectRating: string;
      poor: string;
      belowAverage: string;
      average: string;
      good: string;
      excellent: string;
    };
    eventTypes: {
      conference: string;
      workshop: string;
      productLaunch: string;
      teamMeeting: string;
      customerService: string;
      eventOrganization: string;
      customEvent: string;
    };
  };
  
  // Analytics Page
  analytics: {
    title: string;
    subtitle: string;
    averageRating: string;
    totalRatings: string;
    recentReviews: string;
    ratingDistribution: string;
    recentRatings: string;
    refresh: string;
    anonymousUser: string;
    numberOfBins: string;
  };
  
  // About Page
  about: {
    title: string;
    subtitle: string;
    mission: {
      title: string;
      description1: string;
      description2: string;
    };
    features: {
      anonymity: {
        title: string;
        description: string;
      };
      immutable: {
        title: string;
        description: string;
      };
      verification: {
        title: string;
        description: string;
      };
      analytics: {
        title: string;
        description: string;
      };
    };
    howItWorks: {
      title: string;
      steps: {
        submit: {
          title: string;
          description: string;
        };
        process: {
          title: string;
          description: string;
        };
        blockchain: {
          title: string;
          description: string;
        };
        view: {
          title: string;
          description: string;
        };
      };
    };
    technology: {
      title: string;
      description: string;
      features: {
        finality: string;
        fees: string;
        carbon: string;
        security: string;
      };
    };
  };
  
  // Community Page
  community: {
    title: string;
    subtitle: string;
    stats: {
      activeUsers: string;
      totalRatings: string;
      eventsRated: string;
      communityScore: string;
    };
    recentActivity: {
      title: string;
      newRating: string;
      eventCreated: string;
      milestone: string;
    };
    topEvents: {
      title: string;
      ratings: string;
    };
    guidelines: {
      title: string;
      rating: {
        title: string;
        honest: string;
        experience: string;
        anonymity: string;
      };
      values: {
        title: string;
        transparency: string;
        feedback: string;
        respect: string;
      };
    };
    joinCommunity: {
      title: string;
      description: string;
      joinDiscord: string;
      followUpdates: string;
    };
  };
  
  // Settings Page
  settings: {
    title: string;
    subtitle: string;
    general: {
      title: string;
      language: string;
      languageDescription: string;
      darkMode: string;
      darkModeDescription: string;
    };
    notifications: {
      title: string;
      push: string;
      pushDescription: string;
    };
    privacy: {
      title: string;
      showAnalytics: string;
      showAnalyticsDescription: string;
      showAnalyticsIncluded: string;
      showAnalyticsExcluded: string;
      dataExport: string;
      ratingsStored: string;
      exportData: string;
      clearAllData: string;
    };
    messages: {
      settingsSaved: string;
      analyticsIncluded: string;
      analyticsExcluded: string;
      clearConfirmTitle: string;
      clearConfirmDescription: string;
      cancel: string;
      clearAll: string;
    };
  };
  
  // Common
  common: {
    timeAgo: {
      justNow: string;
      hoursAgo: string;
      daysAgo: string;
    };
  };
}

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      rate: 'Rate',
      analytics: 'Analytics',
      about: 'About',
      community: 'Community',
      settings: 'Settings',
    },
    home: {
      title: 'Trust-O-Meter',
      subtitle: 'Rate events with transparent, immutable feedback powered by Algorand',
      description: 'Simple, secure, and completely anonymous rating system',
      features: {
        rating: {
          title: 'Instant Rating',
          description: 'Submit ratings quickly and anonymously with verification',
        },
        blockchain: {
          title: 'Blockchain Verified',
          description: 'Permanently recorded on Algorand for complete transparency',
        },
        analytics: {
          title: 'Real-time Analytics',
          description: 'View comprehensive statistics and trends in real-time',
        },
      },
      buttons: {
        rateNow: 'Rate Now',
        viewAnalytics: 'View Analytics',
      },
      stats: {
        activeUsers: 'Active Users',
        totalRatings: 'Total Ratings',
        averageRating: 'Average Rating',
      },
    },
    rating: {
      title: 'Submit Your Rating',
      subtitle: 'Rate your experience on the Algorand blockchain',
      yourRating: 'Your Rating',
      eventType: 'Event Type',
      selectEvent: 'Select an event type...',
      customEvent: 'Custom Event',
      customEventPlaceholder: 'Enter your custom event name',
      submitRating: 'Submit Rating',
      submitting: 'Submitting...',
      selectRatingFirst: 'Please select a rating before submitting.',
      enterCustomEvent: 'Please enter a custom event name.',
      selectEventType: 'Please select an event type or enter a custom event name.',
      submittingToBlockchain: 'Submitting rating to blockchain...',
      ratingSubmitted: 'Rating submitted successfully to the blockchain!',
      submissionFailed: 'Failed to submit rating. Please try again.',
      submissionError: 'Error submitting rating. Please try again.',
      ratingDescriptions: {
        selectRating: 'Select a rating',
        poor: '⭐ Poor experience',
        belowAverage: '⭐⭐ Below average',
        average: '⭐⭐⭐ Average experience',
        good: '⭐⭐⭐⭐ Good experience',
        excellent: '⭐⭐⭐⭐⭐ Excellent experience',
      },
      eventTypes: {
        conference: 'Conference Presentation',
        workshop: 'Workshop Session',
        productLaunch: 'Product Launch',
        teamMeeting: 'Team Meeting',
        customerService: 'Customer Service',
        eventOrganization: 'Event Organization',
        customEvent: 'Custom Event',
      },
    },
    analytics: {
      title: 'Rating Analytics',
      subtitle: 'Transparent feedback powered by blockchain technology',
      averageRating: 'Average Rating',
      totalRatings: 'Total Ratings',
      recentReviews: 'Recent Reviews',
      ratingDistribution: 'Rating Distribution',
      recentRatings: 'Recent Ratings',
      refresh: 'Refresh',
      anonymousUser: 'Anonymous User',
      numberOfBins: 'Number of Bins',
    },
    about: {
      title: 'About Trust-O-Meter',
      subtitle: 'A revolutionary rating system built on blockchain technology to ensure transparency, immutability, and complete anonymity in feedback collection.',
      mission: {
        title: 'Our Mission',
        description1: 'Trust-O-Meter was created to solve the fundamental problem of trust in rating systems. Traditional platforms can manipulate, delete, or alter ratings, making it difficult to trust the authenticity of feedback.',
        description2: 'By leveraging the Algorand blockchain, we ensure that every rating is permanently recorded, completely transparent, and impossible to manipulate while maintaining user anonymity.',
      },
      features: {
        anonymity: {
          title: 'Complete Anonymity',
          description: 'Your identity is never revealed. Rate freely without fear of retaliation or bias.',
        },
        immutable: {
          title: 'Immutable Records',
          description: 'Once submitted, ratings cannot be altered or deleted, ensuring permanent transparency.',
        },
        verification: {
          title: 'Instant Verification',
          description: 'All ratings are instantly verified and recorded on the Algorand blockchain.',
        },
        analytics: {
          title: 'Real-time Analytics',
          description: 'View comprehensive statistics and trends based on authentic, unalterable data.',
        },
      },
      howItWorks: {
        title: 'How It Works',
        steps: {
          submit: {
            title: 'Submit Your Rating',
            description: 'Choose your rating and event type through our simple interface.',
          },
          process: {
            title: 'Instant Processing',
            description: 'Your rating is processed and prepared for blockchain submission.',
          },
          blockchain: {
            title: 'Blockchain Recording',
            description: 'Your rating is permanently recorded on the Algorand blockchain.',
          },
          view: {
            title: 'View Analytics',
            description: 'Access real-time statistics and trends based on all submitted ratings.',
          },
        },
      },
      technology: {
        title: 'Built on Algorand',
        description: 'We chose Algorand for its exceptional speed, low transaction costs, and environmental sustainability. The Algorand blockchain provides the perfect foundation for our rating system with its:',
        features: {
          finality: 'Instant transaction finality',
          fees: 'Minimal transaction fees',
          carbon: 'Carbon-negative consensus mechanism',
          security: 'Proven security and decentralization',
        },
      },
    },
    community: {
      title: 'Community Hub',
      subtitle: 'Connect with our growing community of users who value transparent and honest feedback.',
      stats: {
        activeUsers: 'Active Users',
        totalRatings: 'Total Ratings',
        eventsRated: 'Events Rated',
        communityScore: 'Community Score',
      },
      recentActivity: {
        title: 'Recent Activity',
        newRating: 'New rating submitted',
        eventCreated: 'Event created',
        milestone: 'Community milestone',
      },
      topEvents: {
        title: 'Top Rated Events',
        ratings: 'ratings',
      },
      guidelines: {
        title: 'Community Guidelines',
        rating: {
          title: 'Rating Guidelines',
          honest: 'Be honest and constructive in your feedback',
          experience: 'Rate based on your actual experience',
          anonymity: 'Respect the anonymity of the platform',
        },
        values: {
          title: 'Community Values',
          transparency: 'Transparency and honesty',
          feedback: 'Constructive feedback',
          respect: 'Respect for all participants',
        },
      },
      joinCommunity: {
        title: 'Join Our Community',
        description: 'Connect with other users, share feedback, and help build a more transparent rating ecosystem.',
        joinDiscord: 'Join Discord',
        followUpdates: 'Follow Updates',
      },
    },
    settings: {
      title: 'Settings',
      subtitle: 'Customize your Trust-O-Meter experience',
      general: {
        title: 'General',
        language: 'Language',
        languageDescription: 'Choose your preferred language',
        darkMode: 'Dark Mode',
        darkModeDescription: 'Switch to dark theme',
      },
      notifications: {
        title: 'Notifications',
        push: 'Push Notifications',
        pushDescription: 'Receive notifications about rating updates',
      },
      privacy: {
        title: 'Privacy & Data',
        showAnalytics: 'Show in Analytics',
        showAnalyticsDescription: 'Include your ratings in public analytics',
        showAnalyticsIncluded: 'Your ratings are included in public analytics',
        showAnalyticsExcluded: 'Your ratings are excluded from public analytics',
        dataExport: 'Data Export',
        ratingsStored: 'ratings stored locally',
        exportData: 'Export Data',
        clearAllData: 'Clear All Data',
      },
      messages: {
        settingsSaved: 'Settings saved!',
        analyticsIncluded: 'Your ratings will now be included in analytics',
        analyticsExcluded: 'Your ratings will be excluded from analytics',
        clearConfirmTitle: 'Clear All Data?',
        clearConfirmDescription: 'This action cannot be undone. All your ratings will be permanently deleted from local storage.',
        cancel: 'Cancel',
        clearAll: 'Clear All',
      },
    },
    common: {
      timeAgo: {
        justNow: 'Just now',
        hoursAgo: 'h ago',
        daysAgo: 'd ago',
      },
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      rate: 'Calificar',
      analytics: 'Análisis',
      about: 'Acerca de',
      community: 'Comunidad',
      settings: 'Configuración',
    },
    home: {
      title: 'Trust-O-Meter',
      subtitle: 'Califica eventos con comentarios transparentes e inmutables impulsados por Algorand',
      description: 'Sistema de calificación simple, seguro y completamente anónimo',
      features: {
        rating: {
          title: 'Calificación Instantánea',
          description: 'Envía calificaciones rápida y anónimamente con verificación',
        },
        blockchain: {
          title: 'Verificado por Blockchain',
          description: 'Registrado permanentemente en Algorand para completa transparencia',
        },
        analytics: {
          title: 'Análisis en Tiempo Real',
          description: 'Ve estadísticas y tendencias completas en tiempo real',
        },
      },
      buttons: {
        rateNow: 'Calificar Ahora',
        viewAnalytics: 'Ver Análisis',
      },
      stats: {
        activeUsers: 'Usuarios Activos',
        totalRatings: 'Calificaciones Totales',
        averageRating: 'Calificación Promedio',
      },
    },
    rating: {
      title: 'Envía tu Calificación',
      subtitle: 'Califica tu experiencia en la blockchain de Algorand',
      yourRating: 'Tu Calificación',
      eventType: 'Tipo de Evento',
      selectEvent: 'Selecciona un tipo de evento...',
      customEvent: 'Evento Personalizado',
      customEventPlaceholder: 'Ingresa el nombre de tu evento personalizado',
      submitRating: 'Enviar Calificación',
      submitting: 'Enviando...',
      selectRatingFirst: 'Por favor selecciona una calificación antes de enviar.',
      enterCustomEvent: 'Por favor ingresa un nombre de evento personalizado.',
      selectEventType: 'Por favor selecciona un tipo de evento o ingresa un nombre de evento personalizado.',
      submittingToBlockchain: 'Enviando calificación a la blockchain...',
      ratingSubmitted: '¡Calificación enviada exitosamente a la blockchain!',
      submissionFailed: 'Error al enviar la calificación. Por favor intenta de nuevo.',
      submissionError: 'Error enviando la calificación. Por favor intenta de nuevo.',
      ratingDescriptions: {
        selectRating: 'Selecciona una calificación',
        poor: '⭐ Experiencia pobre',
        belowAverage: '⭐⭐ Por debajo del promedio',
        average: '⭐⭐⭐ Experiencia promedio',
        good: '⭐⭐⭐⭐ Buena experiencia',
        excellent: '⭐⭐⭐⭐⭐ Experiencia excelente',
      },
      eventTypes: {
        conference: 'Presentación de Conferencia',
        workshop: 'Sesión de Taller',
        productLaunch: 'Lanzamiento de Producto',
        teamMeeting: 'Reunión de Equipo',
        customerService: 'Servicio al Cliente',
        eventOrganization: 'Organización de Eventos',
        customEvent: 'Evento Personalizado',
      },
    },
    analytics: {
      title: 'Análisis de Calificaciones',
      subtitle: 'Comentarios transparentes impulsados por tecnología blockchain',
      averageRating: 'Calificación Promedio',
      totalRatings: 'Calificaciones Totales',
      recentReviews: 'Reseñas Recientes',
      ratingDistribution: 'Distribución de Calificaciones',
      recentRatings: 'Calificaciones Recientes',
      refresh: 'Actualizar',
      anonymousUser: 'Usuario Anónimo',
      numberOfBins: 'Número de Grupos',
    },
    about: {
      title: 'Acerca de Trust-O-Meter',
      subtitle: 'Un sistema de calificación revolucionario construido sobre tecnología blockchain para asegurar transparencia, inmutabilidad y completo anonimato en la recolección de comentarios.',
      mission: {
        title: 'Nuestra Misión',
        description1: 'Trust-O-Meter fue creado para resolver el problema fundamental de confianza en los sistemas de calificación. Las plataformas tradicionales pueden manipular, eliminar o alterar calificaciones, haciendo difícil confiar en la autenticidad de los comentarios.',
        description2: 'Al aprovechar la blockchain de Algorand, aseguramos que cada calificación sea registrada permanentemente, completamente transparente e imposible de manipular mientras mantenemos el anonimato del usuario.',
      },
      features: {
        anonymity: {
          title: 'Anonimato Completo',
          description: 'Tu identidad nunca es revelada. Califica libremente sin temor a represalias o sesgo.',
        },
        immutable: {
          title: 'Registros Inmutables',
          description: 'Una vez enviadas, las calificaciones no pueden ser alteradas o eliminadas, asegurando transparencia permanente.',
        },
        verification: {
          title: 'Verificación Instantánea',
          description: 'Todas las calificaciones son verificadas instantáneamente y registradas en la blockchain de Algorand.',
        },
        analytics: {
          title: 'Análisis en Tiempo Real',
          description: 'Ve estadísticas y tendencias completas basadas en datos auténticos e inalterables.',
        },
      },
      howItWorks: {
        title: 'Cómo Funciona',
        steps: {
          submit: {
            title: 'Envía tu Calificación',
            description: 'Elige tu calificación y tipo de evento a través de nuestra interfaz simple.',
          },
          process: {
            title: 'Procesamiento Instantáneo',
            description: 'Tu calificación es procesada y preparada para envío a la blockchain.',
          },
          blockchain: {
            title: 'Registro en Blockchain',
            description: 'Tu calificación es registrada permanentemente en la blockchain de Algorand.',
          },
          view: {
            title: 'Ver Análisis',
            description: 'Accede a estadísticas y tendencias en tiempo real basadas en todas las calificaciones enviadas.',
          },
        },
      },
      technology: {
        title: 'Construido en Algorand',
        description: 'Elegimos Algorand por su velocidad excepcional, bajos costos de transacción y sostenibilidad ambiental. La blockchain de Algorand proporciona la base perfecta para nuestro sistema de calificación con su:',
        features: {
          finality: 'Finalidad instantánea de transacciones',
          fees: 'Tarifas de transacción mínimas',
          carbon: 'Mecanismo de consenso carbono-negativo',
          security: 'Seguridad y descentralización probadas',
        },
      },
    },
    community: {
      title: 'Centro de Comunidad',
      subtitle: 'Conéctate con nuestra creciente comunidad de usuarios que valoran los comentarios transparentes y honestos.',
      stats: {
        activeUsers: 'Usuarios Activos',
        totalRatings: 'Calificaciones Totales',
        eventsRated: 'Eventos Calificados',
        communityScore: 'Puntuación de Comunidad',
      },
      recentActivity: {
        title: 'Actividad Reciente',
        newRating: 'Nueva calificación enviada',
        eventCreated: 'Evento creado',
        milestone: 'Hito de la comunidad',
      },
      topEvents: {
        title: 'Eventos Mejor Calificados',
        ratings: 'calificaciones',
      },
      guidelines: {
        title: 'Pautas de la Comunidad',
        rating: {
          title: 'Pautas de Calificación',
          honest: 'Sé honesto y constructivo en tus comentarios',
          experience: 'Califica basado en tu experiencia real',
          anonymity: 'Respeta el anonimato de la plataforma',
        },
        values: {
          title: 'Valores de la Comunidad',
          transparency: 'Transparencia y honestidad',
          feedback: 'Comentarios constructivos',
          respect: 'Respeto por todos los participantes',
        },
      },
      joinCommunity: {
        title: 'Únete a Nuestra Comunidad',
        description: 'Conéctate con otros usuarios, comparte comentarios y ayuda a construir un ecosistema de calificación más transparente.',
        joinDiscord: 'Únete a Discord',
        followUpdates: 'Seguir Actualizaciones',
      },
    },
    settings: {
      title: 'Configuración',
      subtitle: 'Personaliza tu experiencia con Trust-O-Meter',
      general: {
        title: 'General',
        language: 'Idioma',
        languageDescription: 'Elige tu idioma preferido',
        darkMode: 'Modo Oscuro',
        darkModeDescription: 'Cambiar a tema oscuro',
      },
      notifications: {
        title: 'Notificaciones',
        push: 'Notificaciones Push',
        pushDescription: 'Recibe notificaciones sobre actualizaciones de calificaciones',
      },
      privacy: {
        title: 'Privacidad y Datos',
        showAnalytics: 'Mostrar en Análisis',
        showAnalyticsDescription: 'Incluir tus calificaciones en análisis públicos',
        showAnalyticsIncluded: 'Tus calificaciones están incluidas en análisis públicos',
        showAnalyticsExcluded: 'Tus calificaciones están excluidas de análisis públicos',
        dataExport: 'Exportar Datos',
        ratingsStored: 'calificaciones almacenadas localmente',
        exportData: 'Exportar Datos',
        clearAllData: 'Borrar Todos los Datos',
      },
      messages: {
        settingsSaved: '¡Configuración guardada!',
        analyticsIncluded: 'Tus calificaciones ahora serán incluidas en análisis',
        analyticsExcluded: 'Tus calificaciones serán excluidas de análisis',
        clearConfirmTitle: '¿Borrar Todos los Datos?',
        clearConfirmDescription: 'Esta acción no se puede deshacer. Todas tus calificaciones serán eliminadas permanentemente del almacenamiento local.',
        cancel: 'Cancelar',
        clearAll: 'Borrar Todo',
      },
    },
    common: {
      timeAgo: {
        justNow: 'Ahora mismo',
        hoursAgo: 'h atrás',
        daysAgo: 'd atrás',
      },
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      rate: 'Noter',
      analytics: 'Analyses',
      about: 'À propos',
      community: 'Communauté',
      settings: 'Paramètres',
    },
    home: {
      title: 'Trust-O-Meter',
      subtitle: 'Notez les événements avec des commentaires transparents et immuables alimentés par Algorand',
      description: 'Système de notation simple, sécurisé et complètement anonyme',
      features: {
        rating: {
          title: 'Notation Instantanée',
          description: 'Soumettez des notes rapidement et anonymement avec vérification',
        },
        blockchain: {
          title: 'Vérifié par Blockchain',
          description: 'Enregistré de façon permanente sur Algorand pour une transparence complète',
        },
        analytics: {
          title: 'Analyses en Temps Réel',
          description: 'Visualisez des statistiques et tendances complètes en temps réel',
        },
      },
      buttons: {
        rateNow: 'Noter Maintenant',
        viewAnalytics: 'Voir les Analyses',
      },
      stats: {
        activeUsers: 'Utilisateurs Actifs',
        totalRatings: 'Notes Totales',
        averageRating: 'Note Moyenne',
      },
    },
    rating: {
      title: 'Soumettez Votre Note',
      subtitle: 'Notez votre expérience sur la blockchain Algorand',
      yourRating: 'Votre Note',
      eventType: 'Type d\'Événement',
      selectEvent: 'Sélectionnez un type d\'événement...',
      customEvent: 'Événement Personnalisé',
      customEventPlaceholder: 'Entrez le nom de votre événement personnalisé',
      submitRating: 'Soumettre la Note',
      submitting: 'Soumission...',
      selectRatingFirst: 'Veuillez sélectionner une note avant de soumettre.',
      enterCustomEvent: 'Veuillez entrer un nom d\'événement personnalisé.',
      selectEventType: 'Veuillez sélectionner un type d\'événement ou entrer un nom d\'événement personnalisé.',
      submittingToBlockchain: 'Soumission de la note à la blockchain...',
      ratingSubmitted: 'Note soumise avec succès à la blockchain !',
      submissionFailed: 'Échec de la soumission de la note. Veuillez réessayer.',
      submissionError: 'Erreur lors de la soumission de la note. Veuillez réessayer.',
      ratingDescriptions: {
        selectRating: 'Sélectionnez une note',
        poor: '⭐ Expérience médiocre',
        belowAverage: '⭐⭐ En dessous de la moyenne',
        average: '⭐⭐⭐ Expérience moyenne',
        good: '⭐⭐⭐⭐ Bonne expérience',
        excellent: '⭐⭐⭐⭐⭐ Excellente expérience',
      },
      eventTypes: {
        conference: 'Présentation de Conférence',
        workshop: 'Session d\'Atelier',
        productLaunch: 'Lancement de Produit',
        teamMeeting: 'Réunion d\'Équipe',
        customerService: 'Service Client',
        eventOrganization: 'Organisation d\'Événements',
        customEvent: 'Événement Personnalisé',
      },
    },
    analytics: {
      title: 'Analyses des Notes',
      subtitle: 'Commentaires transparents alimentés par la technologie blockchain',
      averageRating: 'Note Moyenne',
      totalRatings: 'Notes Totales',
      recentReviews: 'Avis Récents',
      ratingDistribution: 'Distribution des Notes',
      recentRatings: 'Notes Récentes',
      refresh: 'Actualiser',
      anonymousUser: 'Utilisateur Anonyme',
      numberOfBins: 'Nombre de Groupes',
    },
    about: {
      title: 'À propos de Trust-O-Meter',
      subtitle: 'Un système de notation révolutionnaire construit sur la technologie blockchain pour assurer la transparence, l\'immutabilité et l\'anonymat complet dans la collecte de commentaires.',
      mission: {
        title: 'Notre Mission',
        description1: 'Trust-O-Meter a été créé pour résoudre le problème fondamental de confiance dans les systèmes de notation. Les plateformes traditionnelles peuvent manipuler, supprimer ou altérer les notes, rendant difficile la confiance en l\'authenticité des commentaires.',
        description2: 'En tirant parti de la blockchain Algorand, nous nous assurons que chaque note est enregistrée de façon permanente, complètement transparente et impossible à manipuler tout en maintenant l\'anonymat de l\'utilisateur.',
      },
      features: {
        anonymity: {
          title: 'Anonymat Complet',
          description: 'Votre identité n\'est jamais révélée. Notez librement sans crainte de représailles ou de biais.',
        },
        immutable: {
          title: 'Enregistrements Immuables',
          description: 'Une fois soumises, les notes ne peuvent être altérées ou supprimées, assurant une transparence permanente.',
        },
        verification: {
          title: 'Vérification Instantanée',
          description: 'Toutes les notes sont instantanément vérifiées et enregistrées sur la blockchain Algorand.',
        },
        analytics: {
          title: 'Analyses en Temps Réel',
          description: 'Visualisez des statistiques et tendances complètes basées sur des données authentiques et inaltérables.',
        },
      },
      howItWorks: {
        title: 'Comment Ça Marche',
        steps: {
          submit: {
            title: 'Soumettez Votre Note',
            description: 'Choisissez votre note et type d\'événement via notre interface simple.',
          },
          process: {
            title: 'Traitement Instantané',
            description: 'Votre note est traitée et préparée pour la soumission blockchain.',
          },
          blockchain: {
            title: 'Enregistrement Blockchain',
            description: 'Votre note est enregistrée de façon permanente sur la blockchain Algorand.',
          },
          view: {
            title: 'Voir les Analyses',
            description: 'Accédez aux statistiques et tendances en temps réel basées sur toutes les notes soumises.',
          },
        },
      },
      technology: {
        title: 'Construit sur Algorand',
        description: 'Nous avons choisi Algorand pour sa vitesse exceptionnelle, ses faibles coûts de transaction et sa durabilité environnementale. La blockchain Algorand fournit la base parfaite pour notre système de notation avec ses :',
        features: {
          finality: 'Finalité instantanée des transactions',
          fees: 'Frais de transaction minimaux',
          carbon: 'Mécanisme de consensus carbone-négatif',
          security: 'Sécurité et décentralisation prouvées',
        },
      },
    },
    community: {
      title: 'Centre Communautaire',
      subtitle: 'Connectez-vous avec notre communauté grandissante d\'utilisateurs qui valorisent les commentaires transparents et honnêtes.',
      stats: {
        activeUsers: 'Utilisateurs Actifs',
        totalRatings: 'Notes Totales',
        eventsRated: 'Événements Notés',
        communityScore: 'Score Communautaire',
      },
      recentActivity: {
        title: 'Activité Récente',
        newRating: 'Nouvelle note soumise',
        eventCreated: 'Événement créé',
        milestone: 'Jalon communautaire',
      },
      topEvents: {
        title: 'Événements les Mieux Notés',
        ratings: 'notes',
      },
      guidelines: {
        title: 'Directives Communautaires',
        rating: {
          title: 'Directives de Notation',
          honest: 'Soyez honnête et constructif dans vos commentaires',
          experience: 'Notez basé sur votre expérience réelle',
          anonymity: 'Respectez l\'anonymat de la plateforme',
        },
        values: {
          title: 'Valeurs Communautaires',
          transparency: 'Transparence et honnêteté',
          feedback: 'Commentaires constructifs',
          respect: 'Respect pour tous les participants',
        },
      },
      joinCommunity: {
        title: 'Rejoignez Notre Communauté',
        description: 'Connectez-vous avec d\'autres utilisateurs, partagez des commentaires et aidez à construire un écosystème de notation plus transparent.',
        joinDiscord: 'Rejoindre Discord',
        followUpdates: 'Suivre les Mises à Jour',
      },
    },
    settings: {
      title: 'Paramètres',
      subtitle: 'Personnalisez votre expérience Trust-O-Meter',
      general: {
        title: 'Général',
        language: 'Langue',
        languageDescription: 'Choisissez votre langue préférée',
        darkMode: 'Mode Sombre',
        darkModeDescription: 'Passer au thème sombre',
      },
      notifications: {
        title: 'Notifications',
        push: 'Notifications Push',
        pushDescription: 'Recevez des notifications sur les mises à jour de notes',
      },
      privacy: {
        title: 'Confidentialité et Données',
        showAnalytics: 'Afficher dans les Analyses',
        showAnalyticsDescription: 'Inclure vos notes dans les analyses publiques',
        showAnalyticsIncluded: 'Vos notes sont incluses dans les analyses publiques',
        showAnalyticsExcluded: 'Vos notes sont exclues des analyses publiques',
        dataExport: 'Export de Données',
        ratingsStored: 'notes stockées localement',
        exportData: 'Exporter les Données',
        clearAllData: 'Effacer Toutes les Données',
      },
      messages: {
        settingsSaved: 'Paramètres sauvegardés !',
        analyticsIncluded: 'Vos notes seront maintenant incluses dans les analyses',
        analyticsExcluded: 'Vos notes seront exclues des analyses',
        clearConfirmTitle: 'Effacer Toutes les Données ?',
        clearConfirmDescription: 'Cette action ne peut pas être annulée. Toutes vos notes seront définitivement supprimées du stockage local.',
        cancel: 'Annuler',
        clearAll: 'Tout Effacer',
      },
    },
    common: {
      timeAgo: {
        justNow: 'À l\'instant',
        hoursAgo: 'h il y a',
        daysAgo: 'j il y a',
      },
    },
  },
  nl: {
    nav: {
      home: 'Home',
      rate: 'Beoordelen',
      analytics: 'Analytics',
      about: 'Over Ons',
      community: 'Gemeenschap',
      settings: 'Instellingen',
    },
    home: {
      title: 'Trust-O-Meter',
      subtitle: 'Beoordeel evenementen met transparante, onveranderlijke feedback aangedreven door Algorand',
      description: 'Eenvoudig, veilig en volledig anoniem beoordelingssysteem',
      features: {
        rating: {
          title: 'Directe Beoordeling',
          description: 'Dien beoordelingen snel en anoniem in met verificatie',
        },
        blockchain: {
          title: 'Blockchain Geverifieerd',
          description: 'Permanent vastgelegd op Algorand voor volledige transparantie',
        },
        analytics: {
          title: 'Real-time Analytics',
          description: 'Bekijk uitgebreide statistieken en trends in real-time',
        },
      },
      buttons: {
        rateNow: 'Nu Beoordelen',
        viewAnalytics: 'Bekijk Analytics',
      },
      stats: {
        activeUsers: 'Actieve Gebruikers',
        totalRatings: 'Totaal Beoordelingen',
        averageRating: 'Gemiddelde Beoordeling',
      },
    },
    rating: {
      title: 'Dien Je Beoordeling In',
      subtitle: 'Beoordeel je ervaring op de Algorand blockchain',
      yourRating: 'Jouw Beoordeling',
      eventType: 'Evenement Type',
      selectEvent: 'Selecteer een evenement type...',
      customEvent: 'Aangepast Evenement',
      customEventPlaceholder: 'Voer je aangepaste evenement naam in',
      submitRating: 'Beoordeling Indienen',
      submitting: 'Indienen...',
      selectRatingFirst: 'Selecteer eerst een beoordeling voordat je indient.',
      enterCustomEvent: 'Voer een aangepaste evenement naam in.',
      selectEventType: 'Selecteer een evenement type of voer een aangepaste evenement naam in.',
      submittingToBlockchain: 'Beoordeling indienen bij blockchain...',
      ratingSubmitted: 'Beoordeling succesvol ingediend bij de blockchain!',
      submissionFailed: 'Fout bij het indienen van beoordeling. Probeer opnieuw.',
      submissionError: 'Fout bij het indienen van beoordeling. Probeer opnieuw.',
      ratingDescriptions: {
        selectRating: 'Selecteer een beoordeling',
        poor: '⭐ Slechte ervaring',
        belowAverage: '⭐⭐ Onder gemiddeld',
        average: '⭐⭐⭐ Gemiddelde ervaring',
        good: '⭐⭐⭐⭐ Goede ervaring',
        excellent: '⭐⭐⭐⭐⭐ Uitstekende ervaring',
      },
      eventTypes: {
        conference: 'Conferentie Presentatie',
        workshop: 'Workshop Sessie',
        productLaunch: 'Product Lancering',
        teamMeeting: 'Team Vergadering',
        customerService: 'Klantenservice',
        eventOrganization: 'Evenement Organisatie',
        customEvent: 'Aangepast Evenement',
      },
    },
    analytics: {
      title: 'Beoordeling Analytics',
      subtitle: 'Transparante feedback aangedreven door blockchain technologie',
      averageRating: 'Gemiddelde Beoordeling',
      totalRatings: 'Totaal Beoordelingen',
      recentReviews: 'Recente Reviews',
      ratingDistribution: 'Beoordeling Verdeling',
      recentRatings: 'Recente Beoordelingen',
      refresh: 'Vernieuwen',
      anonymousUser: 'Anonieme Gebruiker',
      numberOfBins: 'Aantal Groepen',
    },
    about: {
      title: 'Over Trust-O-Meter',
      subtitle: 'Een revolutionair beoordelingssysteem gebouwd op blockchain technologie om transparantie, onveranderlijkheid en volledige anonimiteit in feedback verzameling te waarborgen.',
      mission: {
        title: 'Onze Missie',
        description1: 'Trust-O-Meter werd gecreëerd om het fundamentele probleem van vertrouwen in beoordelingssystemen op te lossen. Traditionele platforms kunnen beoordelingen manipuleren, verwijderen of wijzigen, waardoor het moeilijk wordt om de authenticiteit van feedback te vertrouwen.',
        description2: 'Door gebruik te maken van de Algorand blockchain, zorgen we ervoor dat elke beoordeling permanent wordt vastgelegd, volledig transparant is en onmogelijk te manipuleren terwijl gebruikersanonimiteit behouden blijft.',
      },
      features: {
        anonymity: {
          title: 'Volledige Anonimiteit',
          description: 'Je identiteit wordt nooit onthuld. Beoordeel vrijelijk zonder angst voor represailles of vooringenomenheid.',
        },
        immutable: {
          title: 'Onveranderlijke Records',
          description: 'Eenmaal ingediend kunnen beoordelingen niet worden gewijzigd of verwijderd, wat permanente transparantie waarborgt.',
        },
        verification: {
          title: 'Directe Verificatie',
          description: 'Alle beoordelingen worden direct geverifieerd en vastgelegd op de Algorand blockchain.',
        },
        analytics: {
          title: 'Real-time Analytics',
          description: 'Bekijk uitgebreide statistieken en trends gebaseerd op authentieke, onveranderlijke data.',
        },
      },
      howItWorks: {
        title: 'Hoe Het Werkt',
        steps: {
          submit: {
            title: 'Dien Je Beoordeling In',
            description: 'Kies je beoordeling en evenement type via onze eenvoudige interface.',
          },
          process: {
            title: 'Directe Verwerking',
            description: 'Je beoordeling wordt verwerkt en voorbereid voor blockchain indiening.',
          },
          blockchain: {
            title: 'Blockchain Vastlegging',
            description: 'Je beoordeling wordt permanent vastgelegd op de Algorand blockchain.',
          },
          view: {
            title: 'Bekijk Analytics',
            description: 'Toegang tot real-time statistieken en trends gebaseerd op alle ingediende beoordelingen.',
          },
        },
      },
      technology: {
        title: 'Gebouwd op Algorand',
        description: 'We kozen Algorand vanwege zijn uitzonderlijke snelheid, lage transactiekosten en milieuduurzaamheid. De Algorand blockchain biedt de perfecte basis voor ons beoordelingssysteem met zijn:',
        features: {
          finality: 'Directe transactie finaliteit',
          fees: 'Minimale transactiekosten',
          carbon: 'Koolstof-negatief consensus mechanisme',
          security: 'Bewezen veiligheid en decentralisatie',
        },
      },
    },
    community: {
      title: 'Gemeenschap Hub',
      subtitle: 'Verbind met onze groeiende gemeenschap van gebruikers die transparante en eerlijke feedback waarderen.',
      stats: {
        activeUsers: 'Actieve Gebruikers',
        totalRatings: 'Totaal Beoordelingen',
        eventsRated: 'Evenementen Beoordeeld',
        communityScore: 'Gemeenschap Score',
      },
      recentActivity: {
        title: 'Recente Activiteit',
        newRating: 'Nieuwe beoordeling ingediend',
        eventCreated: 'Evenement gecreëerd',
        milestone: 'Gemeenschap mijlpaal',
      },
      topEvents: {
        title: 'Best Beoordeelde Evenementen',
        ratings: 'beoordelingen',
      },
      guidelines: {
        title: 'Gemeenschap Richtlijnen',
        rating: {
          title: 'Beoordeling Richtlijnen',
          honest: 'Wees eerlijk en constructief in je feedback',
          experience: 'Beoordeel gebaseerd op je werkelijke ervaring',
          anonymity: 'Respecteer de anonimiteit van het platform',
        },
        values: {
          title: 'Gemeenschap Waarden',
          transparency: 'Transparantie en eerlijkheid',
          feedback: 'Constructieve feedback',
          respect: 'Respect voor alle deelnemers',
        },
      },
      joinCommunity: {
        title: 'Word Lid van Onze Gemeenschap',
        description: 'Verbind met andere gebruikers, deel feedback en help een transparanter beoordelings-ecosysteem te bouwen.',
        joinDiscord: 'Word Lid van Discord',
        followUpdates: 'Volg Updates',
      },
    },
    settings: {
      title: 'Instellingen',
      subtitle: 'Pas je Trust-O-Meter ervaring aan',
      general: {
        title: 'Algemeen',
        language: 'Taal',
        languageDescription: 'Kies je voorkeurstaal',
        darkMode: 'Donkere Modus',
        darkModeDescription: 'Schakel naar donker thema',
      },
      notifications: {
        title: 'Notificaties',
        push: 'Push Notificaties',
        pushDescription: 'Ontvang notificaties over beoordeling updates',
      },
      privacy: {
        title: 'Privacy & Data',
        showAnalytics: 'Toon in Analytics',
        showAnalyticsDescription: 'Neem je beoordelingen op in publieke analytics',
        showAnalyticsIncluded: 'Je beoordelingen zijn opgenomen in publieke analytics',
        showAnalyticsExcluded: 'Je beoordelingen zijn uitgesloten van publieke analytics',
        dataExport: 'Data Export',
        ratingsStored: 'beoordelingen lokaal opgeslagen',
        exportData: 'Exporteer Data',
        clearAllData: 'Wis Alle Data',
      },
      messages: {
        settingsSaved: 'Instellingen opgeslagen!',
        analyticsIncluded: 'Je beoordelingen worden nu opgenomen in analytics',
        analyticsExcluded: 'Je beoordelingen worden uitgesloten van analytics',
        clearConfirmTitle: 'Alle Data Wissen?',
        clearConfirmDescription: 'Deze actie kan niet ongedaan worden gemaakt. Al je beoordelingen worden permanent verwijderd uit lokale opslag.',
        cancel: 'Annuleren',
        clearAll: 'Alles Wissen',
      },
    },
    common: {
      timeAgo: {
        justNow: 'Zojuist',
        hoursAgo: 'u geleden',
        daysAgo: 'd geleden',
      },
    },
  },
};

/**
 * Get current language from settings
 */
export const getCurrentLanguage = (): Language => {
  try {
    const settings = localStorage.getItem('trust-o-meter-settings');
    if (settings) {
      const parsed = JSON.parse(settings);
      return parsed.language || 'en';
    }
  } catch (error) {
    console.error('Error loading language setting:', error);
  }
  return 'en';
};

/**
 * Get translations for current language
 */
export const getTranslations = (): Translations => {
  const currentLanguage = getCurrentLanguage();
  return translations[currentLanguage] || translations.en;
};

/**
 * Get specific translation by key path
 */
export const t = (keyPath: string): string => {
  const translations = getTranslations();
  const keys = keyPath.split('.');
  
  let value: any = translations;
  for (const key of keys) {
    value = value?.[key];
    if (value === undefined) {
      console.warn(`Translation key not found: ${keyPath}`);
      return keyPath;
    }
  }
  
  return typeof value === 'string' ? value : keyPath;
};

/**
 * Format time ago with current language
 */
export const formatTimeAgo = (date: Date): string => {
  const now = new Date();
  const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
  
  if (diffInHours < 1) return t('common.timeAgo.justNow');
  if (diffInHours < 24) return `${diffInHours}${t('common.timeAgo.hoursAgo')}`;
  const diffInDays = Math.floor(diffInHours / 24);
  return `${diffInDays}${t('common.timeAgo.daysAgo')}`;
};

/**
 * Get language display names
 */
export const getLanguageDisplayNames = (): Record<Language, string> => {
  return {
    en: 'English',
    es: 'Español',
    fr: 'Français',
    nl: 'Nederlands',
  };
};
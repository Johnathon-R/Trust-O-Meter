export type Language = 'en' | 'es' | 'fr' | 'de';

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
      instantRating: {
        title: string;
        description: string;
      };
      blockchainVerified: {
        title: string;
        description: string;
      };
      realTimeAnalytics: {
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
    eventName: string;
    eventLocation: string;
    eventNamePlaceholder: string;
    eventLocationPlaceholder: string;
    submitRating: string;
    submitting: string;
    selectRating: string;
    ratingDescriptions: {
      poor: string;
      belowAverage: string;
      average: string;
      good: string;
      excellent: string;
    };
    messages: {
      pleaseWait: string;
      selectRatingFirst: string;
      enterEventName: string;
      enterEventLocation: string;
      submitSuccess: string;
      submitError: string;
      submitErrorGeneral: string;
    };
  };
  
  // Analytics Page
  analytics: {
    title: string;
    subtitle: string;
    averageRating: string;
    totalRatings: string;
    recentReviews: string;
    recentRatings: string;
    ratingDistribution: string;
    numberOfBins: string;
    refresh: string;
    anonymousUser: string;
    timeAgo: {
      justNow: string;
      hoursAgo: string;
      daysAgo: string;
    };
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
      instantVerification: {
        title: string;
        description: string;
      };
      realTimeAnalytics: {
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
        record: {
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
        instant: string;
        minimal: string;
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
      actions: {
        newRating: string;
        eventCreated: string;
        milestone: string;
      };
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
        constructive: string;
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
      dataExport: string;
      ratingsStored: string;
      exportData: string;
      clearAllData: string;
      clearConfirm: {
        title: string;
        description: string;
        cancel: string;
        clear: string;
      };
    };
    saveMessage: string;
  };
  
  // Common
  common: {
    loading: string;
    error: string;
    success: string;
    cancel: string;
    confirm: string;
    save: string;
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
        instantRating: {
          title: 'Instant Rating',
          description: 'Submit ratings quickly and anonymously with verification',
        },
        blockchainVerified: {
          title: 'Blockchain Verified',
          description: 'Permanently recorded on Algorand for complete transparency',
        },
        realTimeAnalytics: {
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
      eventName: 'Event Name',
      eventLocation: 'Event Location',
      eventNamePlaceholder: 'Type the name of the event...',
      eventLocationPlaceholder: 'Enter the event location (e.g., Toronto, ON)',
      submitRating: 'Submit Rating',
      submitting: 'Submitting...',
      selectRating: 'Select a rating',
      ratingDescriptions: {
        poor: '⭐ Poor experience',
        belowAverage: '⭐⭐ Below average',
        average: '⭐⭐⭐ Average experience',
        good: '⭐⭐⭐⭐ Good experience',
        excellent: '⭐⭐⭐⭐⭐ Excellent experience',
      },
      messages: {
        pleaseWait: 'Please wait for previous rating to submit.',
        selectRatingFirst: 'Please select a rating before submitting.',
        enterEventName: 'Please enter an event name.',
        enterEventLocation: 'Please enter an event Location...',
        submitSuccess: 'Rating submitted successfully to the blockchain!',
        submitError: 'Failed to submit rating. Please try again.',
        submitErrorGeneral: 'Error submitting rating. Please try again.',
      },
    },
    analytics: {
      title: 'Rating Analytics',
      subtitle: 'Transparent feedback powered by blockchain technology',
      averageRating: 'Average Rating',
      totalRatings: 'Total Ratings',
      recentReviews: 'Recent Reviews',
      recentRatings: 'Recent Ratings',
      ratingDistribution: 'Rating Distribution',
      numberOfBins: 'Number of Bins',
      refresh: 'Refresh',
      anonymousUser: 'Anonymous User',
      timeAgo: {
        justNow: 'Just now',
        hoursAgo: 'h ago',
        daysAgo: 'd ago',
      },
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
        instantVerification: {
          title: 'Instant Verification',
          description: 'All ratings are instantly verified and recorded on the Algorand blockchain.',
        },
        realTimeAnalytics: {
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
          record: {
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
          instant: 'Instant transaction finality',
          minimal: 'Minimal transaction fees',
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
        actions: {
          newRating: 'New rating submitted',
          eventCreated: 'Event created',
          milestone: 'Community milestone',
        },
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
          constructive: 'Constructive feedback',
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
        dataExport: 'Data Export',
        ratingsStored: 'ratings stored locally',
        exportData: 'Export Data',
        clearAllData: 'Clear All Data',
        clearConfirm: {
          title: 'Clear All Data?',
          description: 'This action cannot be undone. All your ratings will be permanently deleted from local storage.',
          cancel: 'Cancel',
          clear: 'Clear All',
        },
      },
      saveMessage: 'Settings saved!',
    },
    common: {
      loading: 'Loading...',
      error: 'Error',
      success: 'Success',
      cancel: 'Cancel',
      confirm: 'Confirm',
      save: 'Save',
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
        instantRating: {
          title: 'Calificación Instantánea',
          description: 'Envía calificaciones rápida y anónimamente con verificación',
        },
        blockchainVerified: {
          title: 'Verificado por Blockchain',
          description: 'Registrado permanentemente en Algorand para transparencia completa',
        },
        realTimeAnalytics: {
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
      eventName: 'Nombre del Evento',
      eventLocation: 'Ubicación del Evento',
      eventNamePlaceholder: 'Escribe el nombre del evento...',
      eventLocationPlaceholder: 'Ingresa la ubicación del evento (ej., Toronto, ON)',
      submitRating: 'Enviar Calificación',
      submitting: 'Enviando...',
      selectRating: 'Selecciona una calificación',
      ratingDescriptions: {
        poor: '⭐ Experiencia pobre',
        belowAverage: '⭐⭐ Por debajo del promedio',
        average: '⭐⭐⭐ Experiencia promedio',
        good: '⭐⭐⭐⭐ Buena experiencia',
        excellent: '⭐⭐⭐⭐⭐ Experiencia excelente',
      },
      messages: {
        pleaseWait: 'Por favor espera a que se envíe la calificación anterior.',
        selectRatingFirst: 'Por favor selecciona una calificación antes de enviar.',
        enterEventName: 'Por favor ingresa el nombre del evento.',
        enterEventLocation: 'Por favor ingresa la ubicación del evento...',
        submitSuccess: '¡Calificación enviada exitosamente a la blockchain!',
        submitError: 'Error al enviar la calificación. Por favor intenta de nuevo.',
        submitErrorGeneral: 'Error al enviar la calificación. Por favor intenta de nuevo.',
      },
    },
    analytics: {
      title: 'Análisis de Calificaciones',
      subtitle: 'Comentarios transparentes impulsados por tecnología blockchain',
      averageRating: 'Calificación Promedio',
      totalRatings: 'Calificaciones Totales',
      recentReviews: 'Reseñas Recientes',
      recentRatings: 'Calificaciones Recientes',
      ratingDistribution: 'Distribución de Calificaciones',
      numberOfBins: 'Número de Grupos',
      refresh: 'Actualizar',
      anonymousUser: 'Usuario Anónimo',
      timeAgo: {
        justNow: 'Ahora mismo',
        hoursAgo: 'h atrás',
        daysAgo: 'd atrás',
      },
    },
    about: {
      title: 'Acerca de Trust-O-Meter',
      subtitle: 'Un sistema de calificación revolucionario construido sobre tecnología blockchain para garantizar transparencia, inmutabilidad y completo anonimato en la recopilación de comentarios.',
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
        instantVerification: {
          title: 'Verificación Instantánea',
          description: 'Todas las calificaciones son verificadas instantáneamente y registradas en la blockchain de Algorand.',
        },
        realTimeAnalytics: {
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
            description: 'Tu calificación es procesada y preparada para envío a blockchain.',
          },
          record: {
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
          instant: 'Finalidad de transacción instantánea',
          minimal: 'Tarifas de transacción mínimas',
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
        actions: {
          newRating: 'Nueva calificación enviada',
          eventCreated: 'Evento creado',
          milestone: 'Hito de la comunidad',
        },
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
          constructive: 'Comentarios constructivos',
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
        dataExport: 'Exportar Datos',
        ratingsStored: 'calificaciones almacenadas localmente',
        exportData: 'Exportar Datos',
        clearAllData: 'Borrar Todos los Datos',
        clearConfirm: {
          title: '¿Borrar Todos los Datos?',
          description: 'Esta acción no se puede deshacer. Todas tus calificaciones serán eliminadas permanentemente del almacenamiento local.',
          cancel: 'Cancelar',
          clear: 'Borrar Todo',
        },
      },
      saveMessage: '¡Configuración guardada!',
    },
    common: {
      loading: 'Cargando...',
      error: 'Error',
      success: 'Éxito',
      cancel: 'Cancelar',
      confirm: 'Confirmar',
      save: 'Guardar',
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
        instantRating: {
          title: 'Notation Instantanée',
          description: 'Soumettez des notes rapidement et anonymement avec vérification',
        },
        blockchainVerified: {
          title: 'Vérifié par Blockchain',
          description: 'Enregistré en permanence sur Algorand pour une transparence complète',
        },
        realTimeAnalytics: {
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
      eventName: 'Nom de l\'Événement',
      eventLocation: 'Lieu de l\'Événement',
      eventNamePlaceholder: 'Tapez le nom de l\'événement...',
      eventLocationPlaceholder: 'Entrez le lieu de l\'événement (ex., Toronto, ON)',
      submitRating: 'Soumettre la Note',
      submitting: 'Soumission...',
      selectRating: 'Sélectionnez une note',
      ratingDescriptions: {
        poor: '⭐ Expérience médiocre',
        belowAverage: '⭐⭐ En dessous de la moyenne',
        average: '⭐⭐⭐ Expérience moyenne',
        good: '⭐⭐⭐⭐ Bonne expérience',
        excellent: '⭐⭐⭐⭐⭐ Excellente expérience',
      },
      messages: {
        pleaseWait: 'Veuillez attendre que la note précédente soit soumise.',
        selectRatingFirst: 'Veuillez sélectionner une note avant de soumettre.',
        enterEventName: 'Veuillez entrer le nom de l\'événement.',
        enterEventLocation: 'Veuillez entrer le lieu de l\'événement...',
        submitSuccess: 'Note soumise avec succès à la blockchain !',
        submitError: 'Échec de la soumission de la note. Veuillez réessayer.',
        submitErrorGeneral: 'Erreur lors de la soumission de la note. Veuillez réessayer.',
      },
    },
    analytics: {
      title: 'Analyses des Notes',
      subtitle: 'Commentaires transparents alimentés par la technologie blockchain',
      averageRating: 'Note Moyenne',
      totalRatings: 'Notes Totales',
      recentReviews: 'Avis Récents',
      recentRatings: 'Notes Récentes',
      ratingDistribution: 'Distribution des Notes',
      numberOfBins: 'Nombre de Groupes',
      refresh: 'Actualiser',
      anonymousUser: 'Utilisateur Anonyme',
      timeAgo: {
        justNow: 'À l\'instant',
        hoursAgo: 'h il y a',
        daysAgo: 'j il y a',
      },
    },
    about: {
      title: 'À propos de Trust-O-Meter',
      subtitle: 'Un système de notation révolutionnaire construit sur la technologie blockchain pour assurer la transparence, l\'immutabilité et l\'anonymat complet dans la collecte de commentaires.',
      mission: {
        title: 'Notre Mission',
        description1: 'Trust-O-Meter a été créé pour résoudre le problème fondamental de confiance dans les systèmes de notation. Les plateformes traditionnelles peuvent manipuler, supprimer ou altérer les notes, rendant difficile la confiance en l\'authenticité des commentaires.',
        description2: 'En tirant parti de la blockchain Algorand, nous nous assurons que chaque note est enregistrée en permanence, complètement transparente et impossible à manipuler tout en maintenant l\'anonymat de l\'utilisateur.',
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
        instantVerification: {
          title: 'Vérification Instantanée',
          description: 'Toutes les notes sont instantanément vérifiées et enregistrées sur la blockchain Algorand.',
        },
        realTimeAnalytics: {
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
          record: {
            title: 'Enregistrement Blockchain',
            description: 'Votre note est enregistrée en permanence sur la blockchain Algorand.',
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
          instant: 'Finalité de transaction instantanée',
          minimal: 'Frais de transaction minimaux',
          carbon: 'Mécanisme de consensus carbone-négatif',
          security: 'Sécurité et décentralisation prouvées',
        },
      },
    },
    community: {
      title: 'Hub Communautaire',
      subtitle: 'Connectez-vous avec notre communauté croissante d\'utilisateurs qui valorisent les commentaires transparents et honnêtes.',
      stats: {
        activeUsers: 'Utilisateurs Actifs',
        totalRatings: 'Notes Totales',
        eventsRated: 'Événements Notés',
        communityScore: 'Score Communautaire',
      },
      recentActivity: {
        title: 'Activité Récente',
        actions: {
          newRating: 'Nouvelle note soumise',
          eventCreated: 'Événement créé',
          milestone: 'Jalon communautaire',
        },
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
          constructive: 'Commentaires constructifs',
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
        pushDescription: 'Recevoir des notifications sur les mises à jour de notes',
      },
      privacy: {
        title: 'Confidentialité et Données',
        showAnalytics: 'Afficher dans les Analyses',
        showAnalyticsDescription: 'Inclure vos notes dans les analyses publiques',
        dataExport: 'Export de Données',
        ratingsStored: 'notes stockées localement',
        exportData: 'Exporter les Données',
        clearAllData: 'Effacer Toutes les Données',
        clearConfirm: {
          title: 'Effacer Toutes les Données ?',
          description: 'Cette action ne peut pas être annulée. Toutes vos notes seront définitivement supprimées du stockage local.',
          cancel: 'Annuler',
          clear: 'Tout Effacer',
        },
      },
      saveMessage: 'Paramètres sauvegardés !',
    },
    common: {
      loading: 'Chargement...',
      error: 'Erreur',
      success: 'Succès',
      cancel: 'Annuler',
      confirm: 'Confirmer',
      save: 'Sauvegarder',
    },
  },
  de: {
    nav: {
      home: 'Startseite',
      rate: 'Bewerten',
      analytics: 'Analysen',
      about: 'Über uns',
      community: 'Gemeinschaft',
      settings: 'Einstellungen',
    },
    home: {
      title: 'Trust-O-Meter',
      subtitle: 'Bewerten Sie Veranstaltungen mit transparentem, unveränderlichem Feedback powered by Algorand',
      description: 'Einfaches, sicheres und vollständig anonymes Bewertungssystem',
      features: {
        instantRating: {
          title: 'Sofortbewertung',
          description: 'Bewertungen schnell und anonym mit Verifizierung einreichen',
        },
        blockchainVerified: {
          title: 'Blockchain-Verifiziert',
          description: 'Dauerhaft auf Algorand für vollständige Transparenz aufgezeichnet',
        },
        realTimeAnalytics: {
          title: 'Echtzeit-Analysen',
          description: 'Umfassende Statistiken und Trends in Echtzeit anzeigen',
        },
      },
      buttons: {
        rateNow: 'Jetzt Bewerten',
        viewAnalytics: 'Analysen Anzeigen',
      },
      stats: {
        activeUsers: 'Aktive Benutzer',
        totalRatings: 'Gesamtbewertungen',
        averageRating: 'Durchschnittsbewertung',
      },
    },
    rating: {
      title: 'Ihre Bewertung Einreichen',
      subtitle: 'Bewerten Sie Ihre Erfahrung auf der Algorand-Blockchain',
      yourRating: 'Ihre Bewertung',
      eventName: 'Veranstaltungsname',
      eventLocation: 'Veranstaltungsort',
      eventNamePlaceholder: 'Geben Sie den Namen der Veranstaltung ein...',
      eventLocationPlaceholder: 'Geben Sie den Veranstaltungsort ein (z.B. Toronto, ON)',
      submitRating: 'Bewertung Einreichen',
      submitting: 'Wird eingereicht...',
      selectRating: 'Wählen Sie eine Bewertung',
      ratingDescriptions: {
        poor: '⭐ Schlechte Erfahrung',
        belowAverage: '⭐⭐ Unterdurchschnittlich',
        average: '⭐⭐⭐ Durchschnittliche Erfahrung',
        good: '⭐⭐⭐⭐ Gute Erfahrung',
        excellent: '⭐⭐⭐⭐⭐ Ausgezeichnete Erfahrung',
      },
      messages: {
        pleaseWait: 'Bitte warten Sie, bis die vorherige Bewertung eingereicht wurde.',
        selectRatingFirst: 'Bitte wählen Sie eine Bewertung vor dem Einreichen.',
        enterEventName: 'Bitte geben Sie einen Veranstaltungsnamen ein.',
        enterEventLocation: 'Bitte geben Sie einen Veranstaltungsort ein...',
        submitSuccess: 'Bewertung erfolgreich zur Blockchain eingereicht!',
        submitError: 'Fehler beim Einreichen der Bewertung. Bitte versuchen Sie es erneut.',
        submitErrorGeneral: 'Fehler beim Einreichen der Bewertung. Bitte versuchen Sie es erneut.',
      },
    },
    analytics: {
      title: 'Bewertungsanalysen',
      subtitle: 'Transparentes Feedback powered by Blockchain-Technologie',
      averageRating: 'Durchschnittsbewertung',
      totalRatings: 'Gesamtbewertungen',
      recentReviews: 'Aktuelle Bewertungen',
      recentRatings: 'Aktuelle Bewertungen',
      ratingDistribution: 'Bewertungsverteilung',
      numberOfBins: 'Anzahl der Gruppen',
      refresh: 'Aktualisieren',
      anonymousUser: 'Anonymer Benutzer',
      timeAgo: {
        justNow: 'Gerade eben',
        hoursAgo: 'Std. her',
        daysAgo: 'T. her',
      },
    },
    about: {
      title: 'Über Trust-O-Meter',
      subtitle: 'Ein revolutionäres Bewertungssystem auf Blockchain-Technologie aufgebaut, um Transparenz, Unveränderlichkeit und vollständige Anonymität bei der Feedback-Sammlung zu gewährleisten.',
      mission: {
        title: 'Unsere Mission',
        description1: 'Trust-O-Meter wurde geschaffen, um das grundlegende Problem des Vertrauens in Bewertungssysteme zu lösen. Traditionelle Plattformen können Bewertungen manipulieren, löschen oder ändern, was es schwierig macht, der Authentizität des Feedbacks zu vertrauen.',
        description2: 'Durch die Nutzung der Algorand-Blockchain stellen wir sicher, dass jede Bewertung dauerhaft aufgezeichnet, vollständig transparent und unmöglich zu manipulieren ist, während die Benutzeranonymität gewahrt bleibt.',
      },
      features: {
        anonymity: {
          title: 'Vollständige Anonymität',
          description: 'Ihre Identität wird niemals preisgegeben. Bewerten Sie frei ohne Angst vor Vergeltung oder Voreingenommenheit.',
        },
        immutable: {
          title: 'Unveränderliche Aufzeichnungen',
          description: 'Einmal eingereicht, können Bewertungen nicht geändert oder gelöscht werden, was dauerhafte Transparenz gewährleistet.',
        },
        instantVerification: {
          title: 'Sofortige Verifizierung',
          description: 'Alle Bewertungen werden sofort verifiziert und auf der Algorand-Blockchain aufgezeichnet.',
        },
        realTimeAnalytics: {
          title: 'Echtzeit-Analysen',
          description: 'Umfassende Statistiken und Trends basierend auf authentischen, unveränderbaren Daten anzeigen.',
        },
      },
      howItWorks: {
        title: 'Wie Es Funktioniert',
        steps: {
          submit: {
            title: 'Ihre Bewertung Einreichen',
            description: 'Wählen Sie Ihre Bewertung und Veranstaltungstyp über unsere einfache Benutzeroberfläche.',
          },
          process: {
            title: 'Sofortige Verarbeitung',
            description: 'Ihre Bewertung wird verarbeitet und für die Blockchain-Einreichung vorbereitet.',
          },
          record: {
            title: 'Blockchain-Aufzeichnung',
            description: 'Ihre Bewertung wird dauerhaft auf der Algorand-Blockchain aufgezeichnet.',
          },
          view: {
            title: 'Analysen Anzeigen',
            description: 'Zugriff auf Echtzeit-Statistiken und Trends basierend auf allen eingereichten Bewertungen.',
          },
        },
      },
      technology: {
        title: 'Aufgebaut auf Algorand',
        description: 'Wir haben Algorand für seine außergewöhnliche Geschwindigkeit, niedrigen Transaktionskosten und Umweltverträglichkeit gewählt. Die Algorand-Blockchain bietet die perfekte Grundlage für unser Bewertungssystem mit ihren:',
        features: {
          instant: 'Sofortige Transaktionsfinalisierung',
          minimal: 'Minimale Transaktionsgebühren',
          carbon: 'Kohlenstoff-negativer Konsensmechanismus',
          security: 'Bewährte Sicherheit und Dezentralisierung',
        },
      },
    },
    community: {
      title: 'Gemeinschafts-Hub',
      subtitle: 'Verbinden Sie sich mit unserer wachsenden Gemeinschaft von Benutzern, die transparentes und ehrliches Feedback schätzen.',
      stats: {
        activeUsers: 'Aktive Benutzer',
        totalRatings: 'Gesamtbewertungen',
        eventsRated: 'Bewertete Veranstaltungen',
        communityScore: 'Gemeinschafts-Score',
      },
      recentActivity: {
        title: 'Aktuelle Aktivität',
        actions: {
          newRating: 'Neue Bewertung eingereicht',
          eventCreated: 'Veranstaltung erstellt',
          milestone: 'Gemeinschafts-Meilenstein',
        },
      },
      topEvents: {
        title: 'Top Bewertete Veranstaltungen',
        ratings: 'Bewertungen',
      },
      guidelines: {
        title: 'Gemeinschaftsrichtlinien',
        rating: {
          title: 'Bewertungsrichtlinien',
          honest: 'Seien Sie ehrlich und konstruktiv in Ihrem Feedback',
          experience: 'Bewerten Sie basierend auf Ihrer tatsächlichen Erfahrung',
          anonymity: 'Respektieren Sie die Anonymität der Plattform',
        },
        values: {
          title: 'Gemeinschaftswerte',
          transparency: 'Transparenz und Ehrlichkeit',
          constructive: 'Konstruktives Feedback',
          respect: 'Respekt für alle Teilnehmer',
        },
      },
      joinCommunity: {
        title: 'Treten Sie Unserer Gemeinschaft Bei',
        description: 'Verbinden Sie sich mit anderen Benutzern, teilen Sie Feedback und helfen Sie beim Aufbau eines transparenteren Bewertungsökosystems.',
        joinDiscord: 'Discord Beitreten',
        followUpdates: 'Updates Folgen',
      },
    },
    settings: {
      title: 'Einstellungen',
      subtitle: 'Passen Sie Ihre Trust-O-Meter-Erfahrung an',
      general: {
        title: 'Allgemein',
        language: 'Sprache',
        languageDescription: 'Wählen Sie Ihre bevorzugte Sprache',
        darkMode: 'Dunkler Modus',
        darkModeDescription: 'Zum dunklen Theme wechseln',
      },
      notifications: {
        title: 'Benachrichtigungen',
        push: 'Push-Benachrichtigungen',
        pushDescription: 'Benachrichtigungen über Bewertungsupdates erhalten',
      },
      privacy: {
        title: 'Datenschutz & Daten',
        showAnalytics: 'In Analysen Anzeigen',
        showAnalyticsDescription: 'Ihre Bewertungen in öffentliche Analysen einbeziehen',
        dataExport: 'Datenexport',
        ratingsStored: 'Bewertungen lokal gespeichert',
        exportData: 'Daten Exportieren',
        clearAllData: 'Alle Daten Löschen',
        clearConfirm: {
          title: 'Alle Daten Löschen?',
          description: 'Diese Aktion kann nicht rückgängig gemacht werden. Alle Ihre Bewertungen werden dauerhaft aus dem lokalen Speicher gelöscht.',
          cancel: 'Abbrechen',
          clear: 'Alle Löschen',
        },
      },
      saveMessage: 'Einstellungen gespeichert!',
    },
    common: {
      loading: 'Laden...',
      error: 'Fehler',
      success: 'Erfolg',
      cancel: 'Abbrechen',
      confirm: 'Bestätigen',
      save: 'Speichern',
    },
  },
};

export function getTranslations(language: Language): Translations {
  return translations[language] || translations.en;
}

export function getCurrentLanguage(): Language {
  const savedSettings = localStorage.getItem('trust-o-meter-settings');
  if (savedSettings) {
    const settings = JSON.parse(savedSettings);
    return settings.language || 'en';
  }
  return 'en';
}

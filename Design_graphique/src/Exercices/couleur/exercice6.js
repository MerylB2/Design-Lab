import React, { useState } from 'react';
import { Music, Volume2, Zap, Heart, Waves } from 'lucide-react';

const SynesthesieMusiqueExercice = () => {
  const [selectedGenre, setSelectedGenre] = useState('all');

  const musicExamples = [
    {
      id: 1,
      genre: 'Musique Douce / Ambient',
      icon: <Waves className="w-6 h-6" />,
      colors: ['#E8F4F8', '#B8E0F6', '#A8D8EA', '#6FB4D6', '#87CEEB'],
      shapes: 'fluid',
      description: 'Sons éthérés, piano délicat, synthés légers',
      mood: 'Apaisant, méditatif, contemplatif',
      bgGradient: 'from-sky-100 to-blue-200',
      composition: (
        <div className="relative w-full h-80 bg-gradient-to-br from-sky-50 to-blue-100 rounded-2xl overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-blue-200 opacity-60 blur-2xl"></div>
          <div className="absolute top-20 right-20 w-40 h-40 rounded-full bg-cyan-200 opacity-50 blur-3xl"></div>
          <div className="absolute bottom-10 left-1/3 w-48 h-48 rounded-full bg-sky-300 opacity-40 blur-2xl"></div>
          <div className="absolute bottom-20 right-10 w-36 h-36 rounded-full bg-blue-100 opacity-70 blur-xl"></div>
          <svg className="absolute inset-0 w-full h-full">
            <path d="M 0,150 Q 100,100 200,150 T 400,150" stroke="#A8D8EA" strokeWidth="3" fill="none" opacity="0.6" />
            <path d="M 0,180 Q 120,140 240,180 T 480,180" stroke="#6FB4D6" strokeWidth="2" fill="none" opacity="0.5" />
          </svg>
        </div>
      )
    },
    {
      id: 2,
      genre: 'Rock / Metal',
      icon: <Zap className="w-6 h-6" />,
      colors: ['#8B0000', '#FF4500', '#DC143C', '#000000', '#FFD700'],
      shapes: 'angular',
      description: 'Guitares saturées, batterie agressive, énergie brute',
      mood: 'Intense, puissant, rebellious',
      bgGradient: 'from-red-900 to-black',
      composition: (
        <div className="relative w-full h-80 bg-gradient-to-br from-red-950 to-black rounded-2xl overflow-hidden">
          <div className="absolute top-5 left-10 w-20 h-40 bg-red-600 opacity-80 transform rotate-45"></div>
          <div className="absolute top-20 right-20 w-32 h-32 bg-orange-500 opacity-70 transform -rotate-12"></div>
          <div className="absolute bottom-10 left-1/4 w-24 h-48 bg-red-700 opacity-90 transform rotate-[-30deg]"></div>
          <div className="absolute top-1/3 right-10 w-16 h-16 bg-yellow-500 opacity-80"></div>
          <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-red-800 opacity-75 transform rotate-12"></div>
          <svg className="absolute inset-0 w-full h-full">
            <polygon points="50,50 100,20 150,80 120,140 70,130" fill="#DC143C" opacity="0.6" />
            <polygon points="300,100 350,70 380,150 340,180 290,160" fill="#FF4500" opacity="0.7" />
          </svg>
        </div>
      )
    },
    {
      id: 3,
      genre: 'Jazz / Soul',
      icon: <Music className="w-6 h-6" />,
      colors: ['#4B2E39', '#8B4513', '#CD853F', '#DEB887', '#F4A460'],
      shapes: 'organic',
      description: 'Saxophone mélancolique, contrebasse, piano chaleureux',
      mood: 'Sophistiqué, nostalgique, élégant',
      bgGradient: 'from-amber-900 to-orange-800',
      composition: (
        <div className="relative w-full h-80 bg-gradient-to-br from-amber-950 via-orange-900 to-amber-800 rounded-2xl overflow-hidden">
          <div className="absolute top-10 left-1/4 w-24 h-24 rounded-full bg-amber-700 opacity-70"></div>
          <div className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full bg-orange-600 opacity-60"></div>
          <div className="absolute bottom-20 left-1/3 w-28 h-28 rounded-full bg-amber-600 opacity-80"></div>
          <div className="absolute bottom-10 right-20 w-20 h-20 rounded-full bg-orange-400 opacity-50"></div>
          <svg className="absolute inset-0 w-full h-full">
            <ellipse cx="150" cy="100" rx="60" ry="40" fill="#CD853F" opacity="0.5" transform="rotate(-20 150 100)" />
            <ellipse cx="300" cy="180" rx="50" ry="35" fill="#DEB887" opacity="0.6" transform="rotate(15 300 180)" />
            <path d="M 50,200 Q 150,150 250,200 T 450,200" stroke="#F4A460" strokeWidth="4" fill="none" opacity="0.7" />
          </svg>
        </div>
      )
    },
    {
      id: 4,
      genre: 'Électronique / Techno',
      icon: <Volume2 className="w-6 h-6" />,
      colors: ['#00FFFF', '#FF00FF', '#7B68EE', '#000000', '#FFFFFF'],
      shapes: 'geometric',
      description: 'Beats répétitifs, synthés pulsants, basses profondes',
      mood: 'Hypnotique, énergique, futuriste',
      bgGradient: 'from-purple-900 to-black',
      composition: (
        <div className="relative w-full h-80 bg-gradient-to-br from-purple-950 via-black to-indigo-950 rounded-2xl overflow-hidden">
          <div className="absolute top-10 left-10 w-16 h-16 bg-cyan-400 opacity-80"></div>
          <div className="absolute top-20 right-20 w-20 h-20 bg-fuchsia-500 opacity-70 transform rotate-45"></div>
          <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-purple-500 opacity-90"></div>
          <div className="absolute top-1/2 right-10 w-12 h-12 bg-cyan-300 opacity-60 transform rotate-12"></div>
          <div className="absolute bottom-10 right-1/4 w-32 h-8 bg-fuchsia-600 opacity-80"></div>
          <svg className="absolute inset-0 w-full h-full">
            <rect x="100" y="80" width="40" height="40" fill="#00FFFF" opacity="0.7" />
            <rect x="280" y="120" width="50" height="50" fill="#FF00FF" opacity="0.6" transform="rotate(30 305 145)" />
            <circle cx="200" cy="200" r="15" fill="#7B68EE" opacity="0.8" />
            <circle cx="350" cy="180" r="20" fill="#00FFFF" opacity="0.5" />
          </svg>
        </div>
      )
    },
    {
      id: 5,
      genre: 'Classique / Orchestral',
      icon: <Heart className="w-6 h-6" />,
      colors: ['#800020', '#DAA520', '#4B0082', '#F5F5DC', '#8B4513'],
      shapes: 'flowing',
      description: 'Violons, orchestres symphoniques, mouvements grandioses',
      mood: 'Majestueux, émotionnel, dramatique',
      bgGradient: 'from-purple-900 to-amber-900',
      composition: (
        <div className="relative w-full h-80 bg-gradient-to-br from-purple-950 via-indigo-900 to-amber-950 rounded-2xl overflow-hidden">
          <svg className="absolute inset-0 w-full h-full">
            <path d="M 0,150 Q 100,50 200,150 T 400,150" stroke="#DAA520" strokeWidth="8" fill="none" opacity="0.7" />
            <path d="M 0,180 Q 120,100 240,180 T 480,180" stroke="#800020" strokeWidth="6" fill="none" opacity="0.6" />
            <path d="M 50,120 Q 150,80 250,120 T 450,120" stroke="#4B0082" strokeWidth="5" fill="none" opacity="0.5" />
            <ellipse cx="200" cy="150" rx="80" ry="50" fill="#F5F5DC" opacity="0.3" />
            <ellipse cx="350" cy="180" rx="60" ry="40" fill="#8B4513" opacity="0.4" />
          </svg>
          <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-purple-800 opacity-40 blur-xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-amber-700 opacity-30 blur-2xl"></div>
        </div>
      )
    },
    {
      id: 6,
      genre: 'Pop / Joyeux',
      icon: <Music className="w-6 h-6" />,
      colors: ['#FF69B4', '#FFD700', '#00CED1', '#FF6347', '#9370DB'],
      shapes: 'playful',
      description: 'Mélodies entraînantes, rythmes dansants, refrains accrocheurs',
      mood: 'Joyeux, optimiste, énergisant',
      bgGradient: 'from-pink-300 to-yellow-200',
      composition: (
        <div className="relative w-full h-80 bg-gradient-to-br from-pink-200 via-yellow-100 to-cyan-200 rounded-2xl overflow-hidden">
          <div className="absolute top-10 left-10 w-24 h-24 rounded-full bg-pink-400 opacity-80"></div>
          <div className="absolute top-20 right-16 w-28 h-28 rounded-full bg-yellow-400 opacity-70"></div>
          <div className="absolute bottom-20 left-1/4 w-32 h-32 rounded-full bg-cyan-400 opacity-75"></div>
          <div className="absolute top-1/2 right-1/4 w-20 h-20 rounded-full bg-orange-400 opacity-80"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-purple-400 opacity-65"></div>
          <svg className="absolute inset-0 w-full h-full">
            <circle cx="100" cy="100" r="12" fill="#FF69B4" opacity="0.9" />
            <circle cx="250" cy="150" r="15" fill="#FFD700" opacity="0.8" />
            <circle cx="350" cy="120" r="10" fill="#00CED1" opacity="0.9" />
            <circle cx="180" cy="220" r="13" fill="#FF6347" opacity="0.8" />
          </svg>
        </div>
      )
    }
  ];

  const filteredExamples = selectedGenre === 'all' 
    ? musicExamples 
    : musicExamples.filter(e => e.id === parseInt(selectedGenre));

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Music className="w-10 h-10 text-purple-600" />
            <h1 className="text-4xl font-bold text-slate-800">
              Mockup Visuel - Exercice 6
            </h1>
          </div>
          <p className="text-lg text-slate-600">
            Traduire une Musique en Couleurs (Synesthésie)
          </p>
        </div>

        {/* Instructions Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">Consigne de l'exercice</h2>
          <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded mb-6">
            <p className="text-slate-700 mb-4">
              <strong className="text-purple-800">Objectif :</strong> Écouter un morceau de musique et représenter visuellement son ambiance en créant une composition colorée
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
              <li>Choisir un morceau de musique qui vous inspire</li>
              <li>Identifier les émotions et sensations qu'il évoque</li>
              <li>Traduire ces sensations en couleurs, formes et compositions</li>
              <li>Créer une œuvre abstraite représentant l'essence du morceau</li>
            </ul>
            <p className="text-slate-600 mt-4 text-sm">
              <strong>Support :</strong> Illustrator, Figma, peinture, collage, tout médium créatif
            </p>
          </div>

          {/* Genre Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setSelectedGenre('all')}
              className={`px-5 py-2 rounded-full font-semibold transition-all ${
                selectedGenre === 'all'
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
              }`}
            >
              Tous les exemples
            </button>
            {musicExamples.map((example) => (
              <button
                key={example.id}
                onClick={() => setSelectedGenre(example.id.toString())}
                className={`px-5 py-2 rounded-full font-semibold transition-all ${
                  selectedGenre === example.id.toString()
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                }`}
              >
                {example.genre.split(' / ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Examples Grid */}
        <div className="space-y-8">
          {filteredExamples.map((example) => (
            <div key={example.id} className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              
              {/* Header */}
              <div className={`bg-gradient-to-r ${example.bgGradient} px-8 py-6`}>
                <div className="flex items-center gap-4 mb-2">
                  <div className="bg-white bg-opacity-20 p-3 rounded-full">
                    {example.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-white">{example.genre}</h3>
                </div>
                <p className="text-white text-opacity-90 text-sm">{example.description}</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                
                {/* Left: Visual Composition */}
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-4">Composition Visuelle</h4>
                  {example.composition}
                  
                  <div className="mt-4 p-4 bg-slate-50 rounded-lg">
                    <p className="text-sm text-slate-600">
                      <strong className="text-slate-800">Ambiance :</strong> {example.mood}
                    </p>
                  </div>
                </div>

                {/* Right: Analysis */}
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-4">Analyse Chromatique</h4>
                  
                  {/* Color Palette */}
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-slate-700 mb-3">Palette de couleurs utilisée :</p>
                    <div className="flex gap-2">
                      {example.colors.map((color, idx) => (
                        <div key={idx} className="flex-1">
                          <div 
                            className="w-full h-20 rounded-lg shadow-md border-2 border-white"
                            style={{ backgroundColor: color }}
                          ></div>
                          <p className="text-xs text-center mt-2 font-mono text-slate-600">{color}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Shape Analysis */}
                  <div className="mb-6 p-5 bg-slate-50 rounded-lg">
                    <p className="text-sm font-semibold text-slate-700 mb-2">Type de formes :</p>
                    <p className="text-slate-600 text-sm mb-3">
                      {example.shapes === 'fluid' && 'Formes fluides et organiques - Douceur et continuité'}
                      {example.shapes === 'angular' && 'Formes angulaires et géométriques - Énergie et tension'}
                      {example.shapes === 'organic' && 'Formes organiques et arrondies - Chaleur et naturel'}
                      {example.shapes === 'geometric' && 'Formes géométriques strictes - Précision et rythme'}
                      {example.shapes === 'flowing' && 'Formes fluides et ondulantes - Mouvement et grâce'}
                      {example.shapes === 'playful' && 'Formes rondes et ludiques - Joie et légèreté'}
                    </p>
                  </div>

                  {/* Interpretative Notes */}
                  <div className="p-5 bg-purple-50 rounded-lg border-l-4 border-purple-400">
                    <p className="text-sm font-semibold text-purple-800 mb-2">Notes d'interprétation :</p>
                    <ul className="space-y-2 text-sm text-slate-700">
                      {example.genre === 'Musique Douce / Ambient' && (
                        <>
                          <li>• Tons pastel pour évoquer la douceur</li>
                          <li>• Formes floues et estompées (blur)</li>
                          <li>• Composition aérée et espacée</li>
                        </>
                      )}
                      {example.genre === 'Rock / Metal' && (
                        <>
                          <li>• Couleurs saturées et contrastées</li>
                          <li>• Formes anguleuses et agressives</li>
                          <li>• Composition dense et énergique</li>
                        </>
                      )}
                      {example.genre === 'Jazz / Soul' && (
                        <>
                          <li>• Tons chauds et terreux</li>
                          <li>• Formes organiques et fluides</li>
                          <li>• Composition sophistiquée</li>
                        </>
                      )}
                      {example.genre === 'Électronique / Techno' && (
                        <>
                          <li>• Couleurs néon et contrastes forts</li>
                          <li>• Formes géométriques répétitives</li>
                          <li>• Composition structurée et rythmée</li>
                        </>
                      )}
                      {example.genre === 'Classique / Orchestral' && (
                        <>
                          <li>• Couleurs riches et profondes</li>
                          <li>• Courbes élégantes et amples</li>
                          <li>• Composition majestueuse</li>
                        </>
                      )}
                      {example.genre === 'Pop / Joyeux' && (
                        <>
                          <li>• Couleurs vives et variées</li>
                          <li>• Formes rondes et dynamiques</li>
                          <li>• Composition joyeuse et équilibrée</li>
                        </>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Guide Section */}
        <div className="mt-8 bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Guide de Traduction Musique → Couleurs</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Tempo */}
            <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border-2 border-blue-200">
              <h4 className="font-bold text-blue-800 mb-3 text-lg">Tempo et Rythme</h4>
              <ul className="space-y-2 text-sm text-slate-700">
                <li><strong>Lent :</strong> Couleurs pastel, formes étirées</li>
                <li><strong>Rapide :</strong> Couleurs vives, formes multiples</li>
                <li><strong>Régulier :</strong> Répétitions, patterns géométriques</li>
                <li><strong>Irrégulier :</strong> Composition chaotique, asymétrique</li>
              </ul>
            </div>

            {/* Émotion */}
            <div className="p-6 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl border-2 border-pink-200">
              <h4 className="font-bold text-pink-800 mb-3 text-lg">Émotions</h4>
              <ul className="space-y-2 text-sm text-slate-700">
                <li><strong>Joie :</strong> Jaune, orange, formes rondes</li>
                <li><strong>Tristesse :</strong> Bleu foncé, gris, formes tombantes</li>
                <li><strong>Colère :</strong> Rouge, noir, formes agressives</li>
                <li><strong>Calme :</strong> Vert, bleu clair, formes douces</li>
              </ul>
            </div>

            {/* Intensité */}
            <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl border-2 border-orange-200">
              <h4 className="font-bold text-orange-800 mb-3 text-lg">Intensité Sonore</h4>
              <ul className="space-y-2 text-sm text-slate-700">
                <li><strong>Doux :</strong> Tons clairs, transparence, flou</li>
                <li><strong>Fort :</strong> Couleurs saturées, contours nets</li>
                <li><strong>Crescendo :</strong> Gradient du clair au foncé</li>
                <li><strong>Silence :</strong> Blanc, espaces vides</li>
              </ul>
            </div>
          </div>

          {/* Tips */}
          <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border-2 border-purple-200">
            <h4 className="font-bold text-purple-800 mb-4 text-lg">Conseils pour réussir l'exercice</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-700">
              <div>
                <p className="mb-2">✓ <strong>Fermez les yeux</strong> et écoutez plusieurs fois le morceau</p>
                <p className="mb-2">✓ <strong>Notez vos impressions</strong> : émotions, images mentales, sensations</p>
                <p className="mb-2">✓ <strong>Ne réfléchissez pas trop</strong> : laissez l'intuition guider vos choix</p>
              </div>
              <div>
                <p className="mb-2">✓ <strong>Expérimentez</strong> : il n'y a pas de bonne ou mauvaise réponse</p>
                <p className="mb-2">✓ <strong>Variez les formes</strong> selon les instruments et les passages</p>
                <p className="mb-2">✓ <strong>Jouez avec la saturation</strong> pour représenter l'intensité</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SynesthesieMusiqueExercice;
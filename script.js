// Daily devotional content in Spanish
let lastSavedNotes = '';

const devotionalContent = {
    // Sample content for different days
    '2025-12-09': {
        verse: {
            text: "Porque yo sé los pensamientos que tengo acerca de vosotros, dice Jehová, pensamientos de paz, y no de mal, para daros el fin que esperáis.",
            reference: "Jeremías 29:11"
        },
        reflection: `
            <p>Dios tiene un plan maravilloso para tu vida. Cada día es una oportunidad para acercarte más a Él y descubrir Su propósito. Cuando enfrentamos dificultades, es fácil dudar, pero Dios nos recuerda que Sus planes son de bien y no de mal.</p>
            <p>Hoy, tómate un momento para reconocer que el Padre celestial está obrando en tu vida, incluso en las circunstancias que no entiendes. Su amor por ti es perfecto y eterno.</p>
            <p>Permítete descansar en Su presencia. Él te sostiene y te guía hacia un futuro lleno de esperanza.</p>
        `,
        prayer: `
            <p><strong>Padre Celestial,</strong></p>
            <p>Gracias por amarme con amor eterno. Reconozco que Tus planes para mí son perfectos, incluso cuando no puedo ver el camino completo. Ayúdame a confiar en Ti cada día y a alinear mi corazón con el Tuyo.</p>
            <p>Dame sabiduría para escuchar Tu voz y obediencia para seguir Tus pasos. Lléname de Tu paz y esperanza.</p>
            <p>En el nombre de Jesús, Amén.</p>
        `,
        questions: [
            "¿Qué área de mi vida necesito entregar completamente a Dios hoy?",
            "¿Cómo puedo demostrar mi confianza en los planes de Dios?",
            "¿Qué promesas de Dios necesito recordar en este momento?"
        ]
    },
    '2025-12-10': {
        verse: {
            text: "Acercaos a Dios, y él se acercará a vosotros. Pecadores, limpiad las manos; y vosotros los de doble ánimo, purificad vuestros corazones.",
            reference: "Santiago 4:8"
        },
        reflection: `
            <p>La invitación de Dios es clara: cuando nos acercamos a Él, Él se acerca a nosotros. No importa cuán lejos te sientas, Dios está esperando con los brazos abiertos.</p>
            <p>Acercarnos a Dios requiere intencionalidad. Significa dedicar tiempo en oración, leer Su Palabra, y permitir que el Espíritu Santo examine nuestro corazón.</p>
            <p>Hoy es un nuevo día para experimentar la presencia de Dios de una manera más profunda. Él anhela tener comunión contigo.</p>
        `,
        prayer: `
            <p><strong>Señor Jesús,</strong></p>
            <p>Vengo ante Ti con un corazón sincero, deseando experimentar Tu presencia. Examina mi corazón y revela cualquier área que necesite ser purificada.</p>
            <p>Ayúdame a acercarme a Ti cada día, no por obligación, sino por amor. Quiero conocerte más y caminar en intimidad contigo.</p>
            <p>En Tu nombre oro, Amén.</p>
        `,
        questions: [
            "¿Qué obstáculos me impiden acercarme más a Dios?",
            "¿Cómo puedo crear un espacio diario para estar con el Padre?",
            "¿Qué significa para mí tener un corazón puro delante de Dios?"
        ]
    },
    '2025-12-11': {
        verse: {
            text: "Confía en Jehová de todo tu corazón, y no te apoyes en tu propia prudencia. Reconócelo en todos tus caminos, y él enderezará tus veredas.",
            reference: "Proverbios 3:5-6"
        },
        reflection: `
            <p>Confiar en Dios de todo corazón significa soltar el control y reconocer que Su sabiduría es infinitamente mayor que la nuestra. A menudo queremos entender cada paso antes de darlo, pero Dios nos llama a caminar por fe.</p>
            <p>Cuando reconocemos a Dios en todos nuestros caminos, Él promete dirigirnos. No necesitas tener todas las respuestas; solo necesitas confiar en Aquel que sí las tiene.</p>
            <p>Hoy, elige confiar en Dios en cada decisión, grande o pequeña. Él es fiel para guiarte.</p>
        `,
        prayer: `
            <p><strong>Padre Amado,</strong></p>
            <p>Reconozco que hay áreas en mi vida donde he confiado más en mi propia comprensión que en Ti. Perdóname por intentar controlar todo.</p>
            <p>Hoy elijo confiar en Ti completamente. Guía mis pasos y endereza mis caminos. Ayúdame a reconocerte en cada decisión que tome.</p>
            <p>En el nombre de Jesús, Amén.</p>
        `,
        questions: [
            "¿En qué área de mi vida estoy confiando en mi propia prudencia en lugar de en Dios?",
            "¿Qué significa reconocer a Dios en todos mis caminos?",
            "¿Cómo puedo practicar la confianza en Dios hoy?"
        ]
    },
    'default': {
        verse: {
            text: "Este es el día que hizo Jehová; Nos gozaremos y alegraremos en él.",
            reference: "Salmos 118:24"
        },
        reflection: `
            <p>Cada día es un regalo de Dios, una nueva oportunidad para experimentar Su amor y gracia. Sin importar las circunstancias que enfrentemos, podemos elegir regocijarnos porque Dios está con nosotros.</p>
            <p>El Padre te invita a disfrutar de Su presencia hoy. Él desea que encuentres gozo en la relación íntima con Él, escuchando Su voz y obedeciendo Sus caminos.</p>
            <p>Tómate un momento para agradecer a Dios por este día y por Su fidelidad constante en tu vida.</p>
        `,
        prayer: `
            <p><strong>Querido Padre Celestial,</strong></p>
            <p>Gracias por este nuevo día. Gracias por Tu amor incondicional y por Tu presencia constante en mi vida.</p>
            <p>Ayúdame a escuchar Tu voz claramente hoy. Dame un corazón obediente y alineado con Tu voluntad. Que cada pensamiento, palabra y acción glorifique Tu nombre.</p>
            <p>En el nombre de Jesús, Amén.</p>
        `,
        questions: [
            "¿Por qué estoy agradecido hoy?",
            "¿Cómo puedo escuchar mejor la voz de Dios?",
            "¿Qué paso de obediencia necesito dar hoy?"
        ]
    }
};

// Initialize the application
let currentDate = new Date();

function formatDate(date) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('es-ES', options);
}

function getDateKey(date) {
    return date.toISOString().split('T')[0];
}

function loadContent(date) {
    const dateKey = getDateKey(date);
    const content = devotionalContent[dateKey] || devotionalContent['default'];
    
    // Update date display
    document.getElementById('currentDate').textContent = formatDate(date);
    
    // Update verse
    document.querySelector('.verse-text').textContent = content.verse.text;
    document.querySelector('.verse-reference').textContent = content.verse.reference;
    
    // Update reflection
    document.getElementById('reflection').innerHTML = content.reflection;
    
    // Update prayer
    document.getElementById('prayer').innerHTML = content.prayer;
    
    // Update questions
    const questionsContainer = document.getElementById('questions');
    questionsContainer.innerHTML = '';
    content.questions.forEach(question => {
        const li = document.createElement('li');
        li.textContent = question;
        questionsContainer.appendChild(li);
    });
    
    // Load saved notes for this date
    loadSavedNotes(dateKey);
}

function loadSavedNotes(dateKey) {
    const savedNotes = localStorage.getItem(`notes_${dateKey}`);
    document.getElementById('personalNotes').value = savedNotes || '';
    lastSavedNotes = savedNotes || '';
}

function saveNotes() {
    const dateKey = getDateKey(currentDate);
    const notes = document.getElementById('personalNotes').value;
    localStorage.setItem(`notes_${dateKey}`, notes);
    
    // Show feedback
    const saveBtn = document.getElementById('saveNotes');
    const originalText = saveBtn.textContent;
    saveBtn.textContent = '✓ Guardado';
    saveBtn.style.background = '#28a745';
    
    setTimeout(() => {
        saveBtn.textContent = originalText;
        saveBtn.style.background = '';
    }, 2000);
}

function changeDay(delta) {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + delta);
    currentDate = newDate;
    loadContent(currentDate);
}

// Event listeners
document.getElementById('prevDay').addEventListener('click', () => changeDay(-1));
document.getElementById('nextDay').addEventListener('click', () => changeDay(1));
document.getElementById('saveNotes').addEventListener('click', saveNotes);

// Auto-save notes periodically
setInterval(() => {
    const notes = document.getElementById('personalNotes').value;
    if (notes.trim() && notes !== lastSavedNotes) {
        const dateKey = getDateKey(currentDate);
        localStorage.setItem(`notes_${dateKey}`, notes);
        lastSavedNotes = notes;
    }
}, 30000); // Auto-save every 30 seconds

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey || e.metaKey) {
        if (e.key === 's') {
            e.preventDefault();
            saveNotes();
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            changeDay(-1);
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            changeDay(1);
        }
    }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    loadContent(currentDate);
    // Set dynamic copyright year
    const currentYear = new Date().getFullYear();
    document.getElementById('copyrightYear').textContent = `© ${currentYear} El Padre y Yo - Disfrutando tu Presencia`;
});

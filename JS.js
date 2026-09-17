(async function() {
    if (document.getElementById('custom-excalidraw-sidebar')) return;

    // --- COOKIES ---
    const setCookie = (n, v) => document.cookie = `${n}=${v}; path=/; max-age=31536000; SameSite=Lax`;
    const getCookie = (n) => {
        const v = `; ${document.cookie}`;
        const p = v.split(`; ${n}=`);
        return p.length === 2 ? p.pop().split(';').shift() : null;
    };

    // --- IDIOMAS ---
    const languages = {
        'pt-BR': 'Português (Brasil)',
        'en': 'English',
        'es': 'Español',
        'fr': 'Français',
        'it': 'Italiano',
        'de': 'Deutsch'
    };

    const translations = {
        'pt-BR': {
            appName: 'Excalidraw Explorer',
            pinSidebar: 'Fixar menu',
            unpinSidebar: 'Desafixar menu',
            language: 'Idioma',
            selectFolder: 'Abrir Projetos',
            changeFolder: 'Mudar Pasta',
            reconnectFolder: 'Conectar Pasta',
            newFile: 'Novo',
            newFilePrompt: 'Digite o nome do novo arquivo:',
            newFileAction: 'Criar arquivo',
            createFileError: 'Não foi possível criar o arquivo.',
            deleteFile: 'Excluir',
            noFileOpen: 'Nenhum arquivo aberto',
            open: 'Aberto:',
            autoSaved: '🔄 Auto-Salvo',
            saved: '✅ Salvo',
            errorLoading: 'Erro ao carregar.',
            saveError: 'Erro ao salvar.',
            imagesStillLoading: 'Aguardando imagens serem carregadas...',
            imagesMissing: 'Não foi possível recuperar todas as imagens. O arquivo não foi sobrescrito.',
            selectFile: 'Selecione um arquivo na lista.',
            confirmDelete: 'Tem certeza que deseja excluir "{name}"?',
            deleted: 'Excluído',
            rename: 'Renomear',
            renameAction: 'Renomear',
            cancel: 'Cancelar',
            renamePrompt: 'Digite o novo nome:',
            invalidName: 'Digite um nome válido.',
            nameExists: 'Já existe um arquivo ou pasta com esse nome.',
            duplicate: 'Duplicar',
            duplicateError: 'Não foi possível duplicar o arquivo.',
            newFolder: 'Nova Pasta',
            newFolderAction: 'Criar Pasta',
            newFolderPrompt: 'Digite o nome da nova pasta:',
            folderNameExists: 'Já existe uma pasta com esse nome.',
            createFolderError: 'Não foi possível criar a pasta.',
            confirmDeleteFolder: 'Tem certeza que deseja excluir a pasta "{name}"?',
            folderNotEmpty: 'A pasta não pode ser excluída porque contém arquivos.',
            deleteError: 'Não foi possível excluir.',
            renameUnsupported: 'Este navegador não permite renomear neste momento.',
            renameError: 'Não foi possível renomear.',
            saveFileDescription: 'Excalidraw Workspace',
            suggestedFileName: 'Novo_Projeto.exw'
        },
        'en': {
            appName: 'Excalidraw Explorer',
            pinSidebar: 'Pin menu',
            unpinSidebar: 'Unpin menu',
            language: 'Language',
            selectFolder: 'Open Projects',
            changeFolder: 'Change Folder',
            reconnectFolder: 'Reconnect Folder',
            newFile: 'New',
            newFilePrompt: 'Enter the new file name:',
            newFileAction: 'Create file',
            createFileError: 'Could not create the file.',
            deleteFile: 'Delete',
            noFileOpen: 'No file open',
            open: 'Open:',
            autoSaved: '🔄 Auto-saved',
            saved: '✅ Saved',
            errorLoading: 'Error loading file.',
            saveError: 'Error saving file.',
            imagesStillLoading: 'Waiting for images to finish loading...',
            imagesMissing: 'Some images could not be recovered. The file was not overwritten.',
            selectFile: 'Select a file from the list.',
            confirmDelete: 'Are you sure you want to delete "{name}"?',
            deleted: 'Deleted',
            rename: 'Rename',
            renameAction: 'Rename',
            cancel: 'Cancel',
            renamePrompt: 'Enter the new name:',
            invalidName: 'Enter a valid name.',
            nameExists: 'A file or folder with this name already exists.',
            duplicate: 'Duplicate',
            duplicateError: 'Could not duplicate the file.',
            newFolder: 'New Folder',
            newFolderAction: 'Create Folder',
            newFolderPrompt: 'Enter the new folder name:',
            folderNameExists: 'A folder with this name already exists.',
            createFolderError: 'Could not create the folder.',
            confirmDeleteFolder: 'Are you sure you want to delete the folder "{name}"?',
            folderNotEmpty: 'The folder cannot be deleted because it contains files.',
            deleteError: 'Could not delete.',
            renameUnsupported: 'This browser does not allow renaming right now.',
            renameError: 'Could not rename.',
            saveFileDescription: 'Excalidraw Workspace',
            suggestedFileName: 'New_Project.exw'
        },
        'es': {
            appName: 'Excalidraw Explorer',
            pinSidebar: 'Fijar menú',
            unpinSidebar: 'Desfijar menú',
            language: 'Idioma',
            selectFolder: 'Abrir proyectos',
            changeFolder: 'Cambiar carpeta',
            reconnectFolder: 'Reconectar carpeta',
            newFile: 'Nuevo',
            newFilePrompt: 'Escribe el nombre del nuevo archivo:',
            newFileAction: 'Crear archivo',
            createFileError: 'No se pudo crear el archivo.',
            deleteFile: 'Eliminar',
            noFileOpen: 'Ningún archivo abierto',
            open: 'Abierto:',
            autoSaved: '🔄 Guardado automático',
            saved: '✅ Guardado',
            errorLoading: 'Error al cargar el archivo.',
            saveError: 'Error al guardar el archivo.',
            imagesStillLoading: 'Esperando a que se carguen las imágenes...',
            imagesMissing: 'No se pudieron recuperar todas las imágenes. El archivo no se sobrescribió.',
            selectFile: 'Selecciona un archivo de la lista.',
            confirmDelete: '¿Seguro que deseas eliminar "{name}"?',
            deleted: 'Eliminado',
            rename: 'Renombrar',
            renameAction: 'Renombrar',
            cancel: 'Cancelar',
            renamePrompt: 'Escribe el nuevo nombre:',
            invalidName: 'Escribe un nombre válido.',
            nameExists: 'Ya existe un archivo o carpeta con este nombre.',
            duplicate: 'Duplicar',
            duplicateError: 'No se pudo duplicar el archivo.',
            newFolder: 'Nueva carpeta',
            newFolderAction: 'Crear carpeta',
            newFolderPrompt: 'Escribe el nombre de la nueva carpeta:',
            folderNameExists: 'Ya existe una carpeta con este nombre.',
            createFolderError: 'No se pudo crear la carpeta.',
            confirmDeleteFolder: '¿Seguro que deseas eliminar la carpeta "{name}"?',
            folderNotEmpty: 'No se puede eliminar la carpeta porque contiene archivos.',
            deleteError: 'No se pudo eliminar.',
            renameUnsupported: 'Este navegador no permite renombrar ahora.',
            renameError: 'No se pudo renombrar.',
            saveFileDescription: 'Espacio de trabajo de Excalidraw',
            suggestedFileName: 'Nuevo_Proyecto.exw'
        },
        'fr': {
            appName: 'Excalidraw Explorer',
            pinSidebar: 'Épingler le menu',
            unpinSidebar: 'Désépingler le menu',
            language: 'Langue',
            selectFolder: 'Ouvrir les projets',
            changeFolder: 'Changer de dossier',
            reconnectFolder: 'Reconnecter le dossier',
            newFile: 'Nouveau',
            newFilePrompt: 'Saisissez le nom du nouveau fichier :',
            newFileAction: 'Créer le fichier',
            createFileError: 'Impossible de créer le fichier.',
            deleteFile: 'Supprimer',
            noFileOpen: 'Aucun fichier ouvert',
            open: 'Ouvert :',
            autoSaved: '🔄 Enregistré automatiquement',
            saved: '✅ Enregistré',
            errorLoading: 'Erreur lors du chargement du fichier.',
            saveError: 'Erreur lors de l’enregistrement du fichier.',
            imagesStillLoading: 'En attente du chargement des images...',
            imagesMissing: 'Certaines images n’ont pas pu être récupérées. Le fichier n’a pas été écrasé.',
            selectFile: 'Sélectionnez un fichier dans la liste.',
            confirmDelete: 'Voulez-vous vraiment supprimer « {name} » ?',
            deleted: 'Supprimé',
            rename: 'Renommer',
            renameAction: 'Renommer',
            cancel: 'Annuler',
            renamePrompt: 'Saisissez le nouveau nom :',
            invalidName: 'Saisissez un nom valide.',
            nameExists: 'Un fichier ou dossier portant ce nom existe déjà.',
            duplicate: 'Dupliquer',
            duplicateError: 'Impossible de dupliquer le fichier.',
            newFolder: 'Nouveau dossier',
            newFolderAction: 'Créer le dossier',
            newFolderPrompt: 'Saisissez le nom du nouveau dossier :',
            folderNameExists: 'Un dossier portant ce nom existe déjà.',
            createFolderError: 'Impossible de créer le dossier.',
            confirmDeleteFolder: 'Voulez-vous vraiment supprimer le dossier « {name} » ?',
            folderNotEmpty: 'Le dossier ne peut pas être supprimé car il contient des fichiers.',
            deleteError: 'Impossible de supprimer.',
            renameUnsupported: 'Ce navigateur ne permet pas le renommage actuellement.',
            renameError: 'Impossible de renommer.',
            saveFileDescription: 'Espace de travail Excalidraw',
            suggestedFileName: 'Nouveau_Projet.exw'
        },
        'it': {
            appName: 'Excalidraw Explorer',
            pinSidebar: 'Fissa menu',
            unpinSidebar: 'Sblocca menu',
            language: 'Lingua',
            selectFolder: 'Apri progetti',
            changeFolder: 'Cambia cartella',
            reconnectFolder: 'Riconnetti cartella',
            newFile: 'Nuovo',
            newFilePrompt: 'Inserisci il nome del nuovo file:',
            newFileAction: 'Crea file',
            createFileError: 'Impossibile creare il file.',
            deleteFile: 'Elimina',
            noFileOpen: 'Nessun file aperto',
            open: 'Aperto:',
            autoSaved: '🔄 Salvato automaticamente',
            saved: '✅ Salvato',
            errorLoading: 'Errore durante il caricamento del file.',
            saveError: 'Errore durante il salvataggio del file.',
            imagesStillLoading: 'Attesa del caricamento delle immagini...',
            imagesMissing: 'Non è stato possibile recuperare tutte le immagini. Il file non è stato sovrascritto.',
            selectFile: 'Seleziona un file dall’elenco.',
            confirmDelete: 'Vuoi davvero eliminare "{name}"?',
            deleted: 'Eliminato',
            rename: 'Rinomina',
            renameAction: 'Rinomina',
            cancel: 'Annulla',
            renamePrompt: 'Inserisci il nuovo nome:',
            invalidName: 'Inserisci un nome valido.',
            nameExists: 'Esiste già un file o una cartella con questo nome.',
            duplicate: 'Duplica',
            duplicateError: 'Impossibile duplicare il file.',
            newFolder: 'Nuova cartella',
            newFolderAction: 'Crea cartella',
            newFolderPrompt: 'Inserisci il nome della nuova cartella:',
            folderNameExists: 'Esiste già una cartella con questo nome.',
            createFolderError: 'Impossibile creare la cartella.',
            confirmDeleteFolder: 'Vuoi davvero eliminare la cartella "{name}"?',
            folderNotEmpty: 'La cartella non può essere eliminata perché contiene file.',
            deleteError: 'Impossibile eliminare.',
            renameUnsupported: 'Questo browser non consente di rinominare ora.',
            renameError: 'Impossibile rinominare.',
            saveFileDescription: 'Area di lavoro Excalidraw',
            suggestedFileName: 'Nuovo_Progetto.exw'
        },
        'de': {
            appName: 'Excalidraw Explorer',
            pinSidebar: 'Menü anheften',
            unpinSidebar: 'Menü lösen',
            language: 'Sprache',
            selectFolder: 'Projekte öffnen',
            changeFolder: 'Ordner ändern',
            reconnectFolder: 'Ordner erneut verbinden',
            newFile: 'Neu',
            newFilePrompt: 'Geben Sie den Namen der neuen Datei ein:',
            newFileAction: 'Datei erstellen',
            createFileError: 'Datei konnte nicht erstellt werden.',
            deleteFile: 'Löschen',
            noFileOpen: 'Keine Datei geöffnet',
            open: 'Geöffnet:',
            autoSaved: '🔄 Automatisch gespeichert',
            saved: '✅ Gespeichert',
            errorLoading: 'Fehler beim Laden der Datei.',
            saveError: 'Fehler beim Speichern der Datei.',
            imagesStillLoading: 'Warten, bis die Bilder geladen sind...',
            imagesMissing: 'Einige Bilder konnten nicht abgerufen werden. Die Datei wurde nicht überschrieben.',
            selectFile: 'Wählen Sie eine Datei aus der Liste aus.',
            confirmDelete: 'Möchten Sie „{name}“ wirklich löschen?',
            deleted: 'Gelöscht',
            rename: 'Umbenennen',
            renameAction: 'Umbenennen',
            cancel: 'Abbrechen',
            renamePrompt: 'Geben Sie den neuen Namen ein:',
            invalidName: 'Geben Sie einen gültigen Namen ein.',
            nameExists: 'Eine Datei oder ein Ordner mit diesem Namen existiert bereits.',
            duplicate: 'Duplizieren',
            duplicateError: 'Datei konnte nicht dupliziert werden.',
            newFolder: 'Neuer Ordner',
            newFolderAction: 'Ordner erstellen',
            newFolderPrompt: 'Geben Sie den Namen des neuen Ordners ein:',
            folderNameExists: 'Ein Ordner mit diesem Namen existiert bereits.',
            createFolderError: 'Ordner konnte nicht erstellt werden.',
            confirmDeleteFolder: 'Möchten Sie den Ordner „{name}“ wirklich löschen?',
            folderNotEmpty: 'Der Ordner kann nicht gelöscht werden, weil er Dateien enthält.',
            deleteError: 'Löschen nicht möglich.',
            renameUnsupported: 'Dieser Browser unterstützt das Umbenennen derzeit nicht.',
            renameError: 'Umbenennen nicht möglich.',
            saveFileDescription: 'Excalidraw-Arbeitsbereich',
            suggestedFileName: 'Neues_Projekt.exw'
        }
    };

    // --- PERSISTÊNCIA DE CONFIGURAÇÕES VIA INDEXEDDB (Sem APIs externas) ---
    const saveSetting = (key, value) => {
        return new Promise((resolve) => {
            const req = indexedDB.open("ExcaliLocalDB", 1);
            req.onupgradeneeded = (e) => {
                if (!e.target.result.objectStoreNames.contains('settings')) {
                    e.target.result.createObjectStore('settings');
                }
            };
            req.onsuccess = (e) => {
                const db = e.target.result;
                const tx = db.transaction("settings", "readwrite");
                tx.objectStore("settings").put(value, key);
                tx.oncomplete = () => resolve();
                tx.onerror = () => resolve();
            };
            req.onerror = () => resolve();
        });
    };

    const getSetting = (key) => {
        return new Promise((resolve) => {
            const req = indexedDB.open("ExcaliLocalDB", 1);
            req.onupgradeneeded = (e) => {
                if (!e.target.result.objectStoreNames.contains('settings')) {
                    e.target.result.createObjectStore('settings');
                }
            };
            req.onsuccess = (e) => {
                const db = e.target.result;
                const tx = db.transaction("settings", "readonly");
                const storeReq = tx.objectStore("settings").get(key);
                storeReq.onsuccess = () => resolve(storeReq.result);
                storeReq.onerror = () => resolve(null);
            };
            req.onerror = () => resolve(null);
        });
    };

    const saveFolderHandle = (handle) => saveSetting('folderHandle', handle);
    const getFolderHandle = () => getSetting('folderHandle');
    const saveLanguage = (language) => saveSetting('language', language);
    const getLanguage = () => getSetting('language');

    let currentLanguage = await getLanguage();
    if (!Object.prototype.hasOwnProperty.call(languages, currentLanguage)) {
        currentLanguage = 'pt-BR';
    }

    const translate = (key, values = {}) => {
        let message = (translations[currentLanguage] && translations[currentLanguage][key]) || translations['pt-BR'][key] || key;
        Object.entries(values).forEach(([name, value]) => {
            message = message.replace(`{${name}}`, value);
        });
        return message;
    };

    // --- ÍCONES MONOCROMÁTICOS ---
    const icons = {
        newFile: '<svg class="menu-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3.5h8l4 4V20.5H6z"></path><path d="M14 3.5v5h4"></path><path d="M12 12v5M9.5 14.5h5"></path></svg>',
        deleteFile: '<svg class="menu-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 7h14M10 4h4l1 3H9zM7 7l.8 13h8.4L17 7M10 10.5v6M14 10.5v6"></path></svg>',
        folder: '<svg class="menu-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 7.5A1.5 1.5 0 0 1 5 6h5l2 2h7.5A1.5 1.5 0 0 1 21 9.5v8A1.5 1.5 0 0 1 19.5 19h-14A1.5 1.5 0 0 1 4 17.5z"></path></svg>',
        folderOpen: '<svg class="menu-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 8.5A1.5 1.5 0 0 1 4.5 7H10l2 2h7.5a1.5 1.5 0 0 1 1.4 2l-2.1 6.5a2 2 0 0 1-1.9 1.5H5.2a2 2 0 0 1-1.9-2.5z"></path></svg>',
        file: '<svg class="menu-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3.5h8l4 4V20.5H6z"></path><path d="M14 3.5v5h4"></path></svg>',
        pin: '<svg class="menu-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 4h8M9 4l1 6-3 3h10l-3-3 1-6M12 13v7"></path></svg>',
        globe: '<svg class="menu-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><path d="M3.8 9h16.4M3.8 15h16.4M12 3.5c2.1 2.3 3.1 5.1 3.1 8.5S14.1 18.2 12 20.5C9.9 18.2 8.9 15.4 8.9 12S9.9 5.8 12 3.5z"></path></svg>'
    };

    const icon = (name) => icons[name] || '';

    // --- TEMA DO EXCALIDRAW ---
    const detectExcalidrawTheme = () => {
        try {
            const savedState = JSON.parse(localStorage.getItem('excalidraw-state') || '{}');
            const savedTheme = savedState.theme || savedState.appState?.theme;
            if (savedTheme === 'dark' || savedTheme === 'light') return savedTheme;
        } catch (e) {}

        const pageTheme = `${document.documentElement.className} ${document.documentElement.dataset.theme || ''} ${document.body?.className || ''} ${document.body?.dataset.theme || ''}`.toLowerCase();
        if (/(^|[\s_-])dark([\s_-]|$)/.test(pageTheme)) return 'dark';
        if (/(^|[\s_-])light([\s_-]|$)/.test(pageTheme)) return 'light';

        return window.matchMedia?.('(prefers-color-scheme: dark)')?.matches ? 'dark' : 'light';
    };

    // --- ESCUDO LOCAL ---
    if ('serviceWorker' in navigator) navigator.serviceWorker.getRegistrations().then(rs => rs.forEach(r => r.unregister()));
    window.WebSocket = function() { return { send: () => {}, close: () => {}, addEventListener: () => {}, readyState: 0 }; };

    // --- ESTADO GLOBAL ---
    let currentDirHandle = null;
    let activeFileHandle = null;
    let activeParentDirHandle = null;
    let saveTimeout = null;
    let expandedFolders = new Set(); 
    let contextMenuTarget = null;
    let renameDialogTarget = null;
    let dialogMode = 'rename';
    let newFolderParentDirHandle = null;
    let newFileParentDirHandle = null;
    let excalidrawAPI = null;
    let saveQueue = Promise.resolve();

    // --- DADOS OFICIAIS DO EXCALIDRAW ---
    // A aplicação pública não expõe a instância da API no window. Quando a
    // injeção roda no mesmo contexto da página, ela pode ser encontrada na
    // árvore React; o acesso continua limitado aos métodos públicos da API.
    const isExcalidrawAPI = (value) => value &&
        typeof value.getFiles === 'function' &&
        typeof value.addFiles === 'function' &&
        typeof value.getAppState === 'function' &&
        typeof value.getSceneElementsIncludingDeleted === 'function';

    const findExcalidrawAPI = () => {
        if (isExcalidrawAPI(excalidrawAPI)) return excalidrawAPI;

        const seen = new Set();
        const inspect = (value, depth = 0) => {
            if (!value || depth > 6 || (typeof value !== 'object' && typeof value !== 'function')) return null;
            if (isExcalidrawAPI(value)) return value;
            if (seen.has(value)) return null;
            seen.add(value);

            if (depth === 6) return null;
            for (const key of Object.keys(value)) {
                if (key === 'return' || key === 'child' || key === 'sibling' ||
                    key === 'current' || key === 'next' ||
                    key === 'memoizedProps' || key === 'pendingProps' ||
                    key === 'memoizedState' || key === 'stateNode' ||
                    /excalidraw|api|files|state/i.test(key)) {
                    const found = inspect(value[key], depth + 1);
                    if (found) return found;
                }
            }
            return null;
        };

        const roots = [
            document.getElementById('root'),
            document.querySelector('.excalidraw-app'),
            document.querySelector('.excalidraw-container')
        ].filter(Boolean);
        for (const root of roots) {
            const reactKeys = Object.getOwnPropertyNames(root).filter((key) =>
                key.startsWith('__reactFiber$') || key.startsWith('__reactContainer$')
            );
            for (const key of reactKeys) {
                const found = inspect(root[key]);
                if (found) {
                    excalidrawAPI = found;
                    return found;
                }
            }
        }
        return null;
    };

    const waitForExcalidrawAPI = async (attempts = 8, delay = 125) => {
        for (let attempt = 0; attempt < attempts; attempt++) {
            const api = findExcalidrawAPI();
            if (api) return api;
            await new Promise((resolve) => setTimeout(resolve, delay));
        }
        return null;
    };

    const getReferencedFileIds = (elements) => [...new Set((elements || [])
        .filter((element) => !element.isDeleted && element.fileId)
        .map((element) => element.fileId))];

    const isUsableBinaryFile = (file, fileId) => Boolean(file &&
        typeof file === 'object' &&
        typeof (file.id || fileId) === 'string' &&
        typeof file.dataURL === 'string' &&
        file.dataURL.startsWith('data:') &&
        typeof file.mimeType === 'string' &&
        typeof file.created === 'number');

    const normalizeBinaryFile = (file, fileId) => {
        if (!file || typeof file !== 'object') return null;
        const normalized = { ...file, id: file.id || fileId };
        return isUsableBinaryFile(normalized, fileId) ? normalized : null;
    };

    // Excalidraw mantém os binários locais em files-db/files-store. Esta é
    // apenas uma leitura de compatibilidade/fallback; não criamos um segundo
    // armazenamento nem copiamos os dados para cookies ou localStorage.
    const readOfficialBinaryFiles = async (fileIds) => {
        if (!fileIds.length || !window.indexedDB) return {};
        try {
            if (typeof indexedDB.databases !== 'function') return {};
            const databases = await indexedDB.databases();
            if (!databases.some((database) => database.name === 'files-db')) return {};

            return await new Promise((resolve) => {
                const request = indexedDB.open('files-db');
                let upgrade = false;
                request.onupgradeneeded = () => {
                    upgrade = true;
                    try { request.transaction.abort(); } catch (e) {}
                };
                request.onerror = () => resolve({});
                request.onsuccess = () => {
                    const db = request.result;
                    if (upgrade || !db.objectStoreNames.contains('files-store')) {
                        db.close();
                        resolve({});
                        return;
                    }
                    let transaction;
                    try {
                        transaction = db.transaction('files-store', 'readonly');
                        const store = transaction.objectStore('files-store');
                        const result = {};
                        let remaining = fileIds.length;
                        if (!remaining) {
                            db.close();
                            resolve(result);
                            return;
                        }
                        fileIds.forEach((fileId) => {
                            const getRequest = store.get(fileId);
                            getRequest.onsuccess = () => {
                                const file = normalizeBinaryFile(getRequest.result, fileId);
                                if (file) result[fileId] = file;
                                remaining -= 1;
                                if (!remaining) {
                                    db.close();
                                    resolve(result);
                                }
                            };
                            getRequest.onerror = () => {
                                remaining -= 1;
                                if (!remaining) {
                                    db.close();
                                    resolve(result);
                                }
                            };
                        });
                    } catch (e) {
                        try { db.close(); } catch (closeError) {}
                        resolve({});
                    }
                };
            });
        } catch (e) {
            console.warn('Não foi possível ler os arquivos binários do Excalidraw:', e);
            return {};
        }
    };

    const collectBinaryFiles = async (elements) => {
        const fileIds = getReferencedFileIds(elements);
        if (!fileIds.length) return { files: {}, missing: [] };

        const files = {};
        for (let attempt = 0; attempt < 8; attempt++) {
            const api = findExcalidrawAPI();
            if (api) {
                try {
                    const currentFiles = api.getFiles() || {};
                    for (const fileId of fileIds) {
                        const file = normalizeBinaryFile(currentFiles[fileId], fileId);
                        if (file) files[fileId] = file;
                    }
                } catch (e) {
                    console.warn('Não foi possível ler getFiles() do Excalidraw:', e);
                }
            }

            const storedFiles = await readOfficialBinaryFiles(fileIds.filter((fileId) => !files[fileId]));
            Object.assign(files, storedFiles);
            const missing = fileIds.filter((fileId) => !files[fileId]);
            if (!missing.length) return { files, missing };
            if (attempt < 7) await new Promise((resolve) => setTimeout(resolve, 250));
        }

        return { files, missing: fileIds.filter((fileId) => !files[fileId]) };
    };

    const readCurrentScene = () => {
        const api = findExcalidrawAPI();
        if (api) {
            try {
                const elements = api.getSceneElementsIncludingDeleted();
                const state = api.getAppState();
                // O estado já limpo pelo Excalidraw continua sendo a melhor
                // representação serializável; ele não contém os binários.
                const storedState = localStorage.getItem('excalidraw-state');
                return {
                    elements,
                    appState: storedState ? JSON.parse(storedState) : JSON.parse(JSON.stringify(state || {}))
                };
            } catch (e) {
                console.warn('Não foi possível ler a API do Excalidraw:', e);
            }
        }

        const elements = localStorage.getItem('excalidraw');
        if (!elements) return null;
        return {
            elements: JSON.parse(elements),
            appState: JSON.parse(localStorage.getItem('excalidraw-state') || '{}')
        };
    };

    // 1. Interface
    const sidebar = document.createElement('div');
    sidebar.id = 'custom-excalidraw-sidebar';
    sidebar.innerHTML = `
        <div class="sidebar-content">
            <div class="sidebar-header">
                <div class="sidebar-actions">
                    <button id="btn-new-file" class="sidebar-icon-btn" type="button">${icon('newFile')}</button>
                    <button id="btn-delete-file" class="sidebar-icon-btn" type="button">${icon('deleteFile')}</button>
                    <button id="btn-select-folder" class="sidebar-icon-btn" type="button">${icon('folder')}</button>
                </div>
                <button id="pin-sidebar" class="pin-button" type="button">${icon('pin')}</button>
            </div>
            <div id="file-tree"></div>
            <div id="active-file-status"></div>
            <div class="sidebar-footer">
                <div class="language-control">
                    <button id="language-toggle" class="footer-icon-btn" type="button" aria-expanded="false">${icon('globe')}</button>
                    <select id="language-select" aria-label="">
                        ${Object.entries(languages).map(([code, name]) => `<option value="${code}">${name}</option>`).join('')}
                    </select>
                </div>
                <small id="sidebar-brand"><a id="sidebar-brand-link" href="https://github.com/leonardomack/excalidraw-explorer" target="_blank" rel="noopener noreferrer"></a></small>
            </div>
        </div>
    `;
    document.body.appendChild(sidebar);

    // Menu contextual e diálogo ficam fora da árvore para não forçar uma nova
    // leitura do disco quando uma ação altera apenas a apresentação local.
    const contextMenu = document.createElement('div');
    contextMenu.id = 'file-context-menu';
    contextMenu.className = 'file-context-menu';
    contextMenu.hidden = true;
    contextMenu.setAttribute('role', 'menu');
    contextMenu.innerHTML = `
        <button type="button" role="menuitem" data-action="new-file"></button>
        <button type="button" role="menuitem" data-action="rename"></button>
        <button type="button" role="menuitem" data-action="duplicate"></button>
        <button type="button" role="menuitem" data-action="delete"></button>
        <button type="button" role="menuitem" data-action="new-folder"></button>
    `;
    document.body.appendChild(contextMenu);

    const renameDialog = document.createElement('div');
    renameDialog.id = 'rename-dialog-overlay';
    renameDialog.className = 'rename-dialog-overlay';
    renameDialog.hidden = true;
    renameDialog.setAttribute('role', 'dialog');
    renameDialog.setAttribute('aria-modal', 'true');
    renameDialog.innerHTML = `
        <form class="rename-dialog" novalidate>
            <h2 class="rename-dialog-title"></h2>
            <label class="rename-dialog-label">
                <span class="rename-dialog-prompt"></span>
                <input class="rename-dialog-input" type="text" autocomplete="off" spellcheck="false" required>
            </label>
            <div class="rename-dialog-actions">
                <button type="button" class="rename-dialog-cancel"></button>
                <button type="submit" class="rename-dialog-confirm"></button>
            </div>
        </form>
    `;
    document.body.appendChild(renameDialog);

    // O tema é calculado uma única vez no carregamento para evitar observadores
    // que possam entrar em ciclo ao alterar atributos da própria barra lateral.
    const applyTheme = () => {
        const theme = detectExcalidrawTheme();
        sidebar.dataset.theme = theme;
        contextMenu.dataset.theme = theme;
        renameDialog.dataset.theme = theme;
    };
    applyTheme();

    const btnSelect = document.getElementById('btn-select-folder');
    const btnNewFile = document.getElementById('btn-new-file');
    const btnDeleteFile = document.getElementById('btn-delete-file');
    const fileTree = document.getElementById('file-tree');
    const pinBtn = document.getElementById('pin-sidebar');
    const languageToggle = document.getElementById('language-toggle');
    const languageControl = sidebar.querySelector('.language-control');
    const languageSelect = document.getElementById('language-select');
    const contextRenameButton = contextMenu.querySelector('[data-action="rename"]');
    const contextDuplicateButton = contextMenu.querySelector('[data-action="duplicate"]');
    const contextDeleteButton = contextMenu.querySelector('[data-action="delete"]');
    const contextNewFolderButton = contextMenu.querySelector('[data-action="new-folder"]');
    const renameDialogForm = renameDialog.querySelector('form');
    const renameDialogTitle = renameDialog.querySelector('.rename-dialog-title');
    const renameDialogPrompt = renameDialog.querySelector('.rename-dialog-prompt');
    const renameDialogInput = renameDialog.querySelector('.rename-dialog-input');
    const renameDialogCancel = renameDialog.querySelector('.rename-dialog-cancel');
    const renameDialogConfirm = renameDialog.querySelector('.rename-dialog-confirm');
    const contextNewFileButton = contextMenu.querySelector('[data-action="new-file"]');

    const updateFolderButton = () => {
        if (btnSelect.dataset.action === 'reactivate') {
            btnSelect.title = translate('reconnectFolder');
            btnSelect.dataset.tooltip = translate('reconnectFolder');
        } else if (currentDirHandle) {
            btnSelect.title = translate('changeFolder');
            btnSelect.dataset.tooltip = translate('changeFolder');
        } else {
            btnSelect.title = translate('selectFolder');
            btnSelect.dataset.tooltip = translate('selectFolder');
        }
        btnSelect.setAttribute('aria-label', btnSelect.title);
    };

    const updateFileStatus = (status = 'open', name = '') => {
        const statusDiv = document.getElementById('active-file-status');
        statusDiv.replaceChildren();
        if (status === 'open' && name) {
            const label = document.createElement('b');
            label.innerText = translate('open');
            statusDiv.append(label, document.createTextNode(` ${name}`));
        } else if (status === 'saved' || status === 'autoSaved') {
            const message = status === 'autoSaved' ? translate('autoSaved') : translate('saved');
            const label = document.createElement('span');
            label.style.color = 'var(--sidebar-text)';
            label.innerText = `${message}: ${name}`;
            statusDiv.appendChild(label);
        } else {
            statusDiv.innerText = translate(status);
        }
    };

    const applyLanguage = () => {
        sidebar.lang = currentLanguage;
        contextMenu.lang = currentLanguage;
        renameDialog.lang = currentLanguage;
        document.getElementById('sidebar-brand-link').innerText = translate('appName');
        btnNewFile.title = translate('newFile');
        btnNewFile.dataset.tooltip = translate('newFile');
        btnNewFile.setAttribute('aria-label', btnNewFile.title);
        btnDeleteFile.title = translate('deleteFile');
        btnDeleteFile.dataset.tooltip = translate('deleteFile');
        btnDeleteFile.setAttribute('aria-label', btnDeleteFile.title);
        languageToggle.title = translate('language');
        languageToggle.setAttribute('aria-label', languageToggle.title);
        languageSelect.setAttribute('aria-label', translate('language'));
        languageSelect.value = currentLanguage;
        pinBtn.title = sidebar.classList.contains('pinned') ? translate('unpinSidebar') : translate('pinSidebar');
        pinBtn.dataset.tooltip = pinBtn.title;
        pinBtn.setAttribute('aria-label', pinBtn.title);
        updateFolderButton();
        contextRenameButton.innerText = translate('rename');
        renameDialogTitle.innerText = dialogMode === 'new-folder'
            ? translate('newFolder')
            : dialogMode === 'new-file' ? translate('newFile') : translate('rename');
        renameDialogPrompt.innerText = dialogMode === 'new-folder'
            ? translate('newFolderPrompt')
            : dialogMode === 'new-file' ? translate('newFilePrompt') : translate('renamePrompt');
        renameDialogCancel.innerText = translate('cancel');
        renameDialogConfirm.innerText = dialogMode === 'new-folder'
            ? translate('newFolderAction')
            : dialogMode === 'new-file' ? translate('newFileAction') : translate('renameAction');
        contextDuplicateButton.innerText = translate('duplicate');
        contextDeleteButton.innerText = translate('deleteFile');
        contextNewFolderButton.innerText = translate('newFolder');
        contextNewFileButton.innerText = translate('newFile');

        if (activeFileHandle) {
            updateFileStatus('open', activeFileHandle.name.replace('.exw', ''));
        } else {
            updateFileStatus('noFileOpen');
        }
    };

    applyLanguage();

    languageSelect.addEventListener('change', async () => {
        if (!Object.prototype.hasOwnProperty.call(languages, languageSelect.value)) return;
        currentLanguage = languageSelect.value;
        await saveLanguage(currentLanguage);
        applyLanguage();
    });

    languageToggle.addEventListener('click', () => {
        const isOpen = languageControl.classList.toggle('open');
        languageToggle.setAttribute('aria-expanded', String(isOpen));
        if (isOpen) languageSelect.focus();
    });

    // --- LÓGICA DE AFASTAR O EXCALIDRAW ---
    sidebar.addEventListener('mouseenter', () => document.body.classList.add('sidebar-active'));
    sidebar.addEventListener('mouseleave', () => {
        if (!sidebar.classList.contains('pinned')) {
            document.body.classList.remove('sidebar-active');
        }
    });

    const isPinned = getCookie('excaliSidebarPinned') === 'true';
    
    if (isPinned) {
        sidebar.classList.add('pinned');
        document.body.classList.add('sidebar-active'); 
        pinBtn.style.opacity = '1';
        pinBtn.title = translate('unpinSidebar');
        pinBtn.dataset.tooltip = pinBtn.title;
        pinBtn.setAttribute('aria-label', pinBtn.title);
    } else {
        pinBtn.style.opacity = '0.3';
    }

    pinBtn.addEventListener('click', () => {
        const p = sidebar.classList.toggle('pinned');
        pinBtn.style.opacity = p ? '1' : '0.3';
        pinBtn.title = p ? translate('unpinSidebar') : translate('pinSidebar');
        pinBtn.dataset.tooltip = pinBtn.title;
        pinBtn.setAttribute('aria-label', pinBtn.title);
        setCookie('excaliSidebarPinned', p);
        if (p) {
            document.body.classList.add('sidebar-active');
        } else {
            document.body.classList.remove('sidebar-active');
        }
    });

    const displayNameFor = (name, kind) => kind === 'file' && name.endsWith('.exw')
        ? name.slice(0, -4)
        : name;

    const closeContextMenu = () => {
        contextMenu.hidden = true;
        contextMenuTarget = null;
    };

    const showContextMenu = (target, clientX, clientY) => {
        contextMenuTarget = target;
        const isEntry = target.kind === 'file' || target.kind === 'directory';
        contextNewFileButton.hidden = !['blank', 'directory'].includes(target.kind);
        contextDuplicateButton.hidden = target.kind !== 'file';
        contextRenameButton.hidden = !isEntry;
        contextDeleteButton.hidden = !isEntry;
        contextNewFolderButton.hidden = target.kind !== 'blank';
        contextMenu.hidden = false;

        const margin = 6;
        const menuWidth = 170;
        const menuHeight = contextMenu.offsetHeight || 100;
        contextMenu.style.left = `${Math.max(margin, Math.min(clientX, window.innerWidth - menuWidth - margin))}px`;
        contextMenu.style.top = `${Math.max(margin, Math.min(clientY, window.innerHeight - menuHeight - margin))}px`;
        (contextNewFileButton.hidden ? contextRenameButton : contextNewFileButton).focus();
    };

    const closeRenameDialog = () => {
        renameDialog.hidden = true;
        renameDialogTarget = null;
        newFolderParentDirHandle = null;
        newFileParentDirHandle = null;
        dialogMode = 'rename';
        renameDialogInput.value = '';
    };

    const updateTreePaths = (li, oldPath, newPath) => {
        [li, ...li.querySelectorAll('li')].forEach((item) => {
            if (!item.dataset.treePath) return;
            if (item.dataset.treePath === oldPath) {
                item.dataset.treePath = newPath;
            } else if (item.dataset.treePath.startsWith(`${oldPath}/`)) {
                item.dataset.treePath = newPath + item.dataset.treePath.slice(oldPath.length);
            }
        });
    };

    const updateTreeItemLocally = (target, newName) => {
        const label = target.li.querySelector('.tree-label');
        if (label) label.textContent = displayNameFor(newName, target.kind);
        target.li.dataset.treeName = newName;
        if (target.kind === 'directory') {
            updateTreePaths(target.li, target.path, `${target.parentPath}/${newName}`.replace(/^\//, ''));
            const oldPath = target.path;
            const newPath = `${target.parentPath}/${newName}`.replace(/^\//, '');
            expandedFolders = new Set([...expandedFolders].map((path) => {
                if (path === oldPath) return newPath;
                return path.startsWith(`${oldPath}/`) ? newPath + path.slice(oldPath.length) : path;
            }));
        }
    };

    const entryExists = async (parentDirHandle, name) => {
        try {
            await parentDirHandle.getFileHandle(name);
            return true;
        } catch (fileError) {
            try {
                await parentDirHandle.getDirectoryHandle(name);
                return true;
            } catch (directoryError) {
                const notFound = (error) => ['NotFoundError', 'TypeMismatchError'].includes(error?.name);
                if (notFound(fileError) && notFound(directoryError)) return false;
                throw fileError;
            }
        }
    };

    const normalizeRenameName = (value, kind) => {
        const name = value.trim();
        if (!name || name === '.' || name === '..' || /[\\/\0]/.test(name)) return null;
        if (kind === 'file' && !name.endsWith('.exw')) return `${name}.exw`;
        return name;
    };

    const directoryContainsFiles = async (directoryHandle) => {
        for await (const entry of directoryHandle.values()) {
            if (entry.kind === 'file') return true;
            if (await directoryContainsFiles(entry)) return true;
        }
        return false;
    };

    const deleteEntry = async (target) => {
        if (!target || !target.parentDirHandle) return false;

        if (target.kind === 'directory' && await directoryContainsFiles(target.handle)) {
            alert(translate('folderNotEmpty'));
            return false;
        }

        const displayName = displayNameFor(target.name, target.kind);
        const message = target.kind === 'directory'
            ? translate('confirmDeleteFolder', { name: displayName })
            : translate('confirmDelete', { name: displayName });
        if (!confirm(message)) return false;

        const isActiveFile = target.kind === 'file' && activeFileHandle
            ? await target.handle.isSameEntry(activeFileHandle)
            : false;

        if (isActiveFile) {
            clearTimeout(saveTimeout);
            await saveCurrentFile(false);
        }

        if (target.kind === 'file') {
            const sourceFile = await target.handle.getFile();
            const deletedHandle = await target.parentDirHandle.getFileHandle(`${target.name}.deleted`, { create: true });
            const writable = await deletedHandle.createWritable();
            await writable.write(await sourceFile.arrayBuffer());
            await writable.close();
            await target.parentDirHandle.removeEntry(target.name);
        } else {
            await target.parentDirHandle.removeEntry(target.name, { recursive: true });
            expandedFolders = new Set([...expandedFolders].filter((path) =>
                path !== target.path && !path.startsWith(`${target.path}/`)
            ));
        }

        if (isActiveFile) {
            activeFileHandle = null;
            activeParentDirHandle = null;
            localStorage.removeItem('excalidraw');
        }

        if (currentDirHandle) {
            await renderTree(currentDirHandle, document.getElementById('file-tree'), '');
        }

        if (isActiveFile) {
            const tempHandle = await ensureTemporaryFileExists();
            if (tempHandle) {
                await openExcalidrawFile(tempHandle, currentDirHandle, null);
            } else {
                updateFileStatus('deleted');
            }
        }
        return true;
    };

    const createFolder = async (parentDirHandle, requestedName) => {
        const name = normalizeRenameName(requestedName, 'directory');
        if (!name) {
            alert(translate('invalidName'));
            return false;
        }
        if (await entryExists(parentDirHandle, name)) {
            alert(translate('folderNameExists'));
            return false;
        }
        await parentDirHandle.getDirectoryHandle(name, { create: true });
        if (currentDirHandle) {
            await renderTree(currentDirHandle, document.getElementById('file-tree'), '');
        }
        return true;
    };

    const copyDirectoryContents = async (sourceDirHandle, targetDirHandle) => {
        for await (const entry of sourceDirHandle.values()) {
            if (entry.kind === 'directory') {
                const childTarget = await targetDirHandle.getDirectoryHandle(entry.name, { create: true });
                await copyDirectoryContents(entry, childTarget);
            } else {
                const sourceFile = await entry.getFile();
                const targetFile = await targetDirHandle.getFileHandle(entry.name, { create: true });
                const writable = await targetFile.createWritable();
                await writable.write(await sourceFile.arrayBuffer());
                await writable.close();
            }
        }
    };

    const findActiveFilePath = async (sourceDirHandle) => {
        if (!activeFileHandle || !activeParentDirHandle) return null;
        const visit = async (directoryHandle) => {
            if (await directoryHandle.isSameEntry(activeParentDirHandle)) {
                return [activeFileHandle.name];
            }
            for await (const entry of directoryHandle.values()) {
                if (entry.kind !== 'directory') continue;
                const result = await visit(entry);
                if (result) return [entry.name, ...result];
            }
            return null;
        };
        return visit(sourceDirHandle);
    };

    const getReboundActiveHandles = async (directoryHandle, relativePath) => {
        if (!relativePath) return null;
        let parent = directoryHandle;
        for (const folderName of relativePath.slice(0, -1)) {
            parent = await parent.getDirectoryHandle(folderName);
        }
        return {
            activeParentDirHandle: parent,
            activeFileHandle: await parent.getFileHandle(relativePath[relativePath.length - 1])
        };
    };

    const renameWithFallback = async (target, newName) => {
        // O Chromium expõe move() para alguns handles, mas em arquivos locais
        // ele pode existir e falhar por ainda ser experimental. Para arquivos
        // do disco, o caminho copy/remove abaixo é mais compatível.
        if (target.kind === 'directory' && typeof target.handle.move === 'function') {
            try {
                await target.handle.move(newName);
                return target.kind === 'file'
                    ? await target.parentDirHandle.getFileHandle(newName)
                    : await target.parentDirHandle.getDirectoryHandle(newName);
            } catch (error) {
                if (!['NotSupportedError', 'InvalidStateError'].includes(error?.name)) throw error;
            }
        }

        if (target.kind === 'file') {
            const sourceFile = await target.handle.getFile();
            const destination = await target.parentDirHandle.getFileHandle(newName, { create: true });
            try {
                const writable = await destination.createWritable();
                await writable.write(await sourceFile.arrayBuffer());
                await writable.close();
                await target.parentDirHandle.removeEntry(target.name);
            } catch (error) {
                try { await target.parentDirHandle.removeEntry(newName); } catch (cleanupError) {}
                throw error;
            }
            return destination;
        }

        const activeRelativePath = await findActiveFilePath(target.handle);
        const destination = await target.parentDirHandle.getDirectoryHandle(newName, { create: true });
        try {
            await copyDirectoryContents(target.handle, destination);
            await target.parentDirHandle.removeEntry(target.name, { recursive: true });
        } catch (error) {
            try { await target.parentDirHandle.removeEntry(newName, { recursive: true }); } catch (cleanupError) {}
            throw error;
        }
        return {
            handle: destination,
            ...(await getReboundActiveHandles(destination, activeRelativePath) || {})
        };
    };

    const renameEntry = async (target, requestedName) => {
        const newName = normalizeRenameName(requestedName, target.kind);
        if (!newName) {
            alert(translate('invalidName'));
            return false;
        }
        if (newName === target.name) return true;
        if (await entryExists(target.parentDirHandle, newName)) {
            alert(translate('nameExists'));
            return false;
        }
        const isActiveFile = target.kind === 'file' && activeFileHandle
            ? await target.handle.isSameEntry(activeFileHandle)
            : false;
        const isActiveParent = activeParentDirHandle && target.kind === 'directory'
            ? await target.handle.isSameEntry(activeParentDirHandle)
            : false;

        if (isActiveFile) await saveCurrentFile(false);
        const renameResult = await renameWithFallback(target, newName);
        const renamedHandle = renameResult.handle || renameResult;

        updateTreeItemLocally(target, newName);
        target.name = newName;
        target.handle = renamedHandle;
        if (isActiveFile) {
            activeFileHandle = renamedHandle;
            activeParentDirHandle = target.parentDirHandle;
            updateFileStatus('open', displayNameFor(newName, 'file'));
        } else if (isActiveParent) {
            activeParentDirHandle = renamedHandle;
        }
        if (renameResult.activeFileHandle) {
            activeFileHandle = renameResult.activeFileHandle;
            activeParentDirHandle = renameResult.activeParentDirHandle;
        }
        return true;
    };

    const openRenameDialog = (target) => {
        closeContextMenu();
        dialogMode = 'rename';
        applyLanguage();
        renameDialogTarget = target;
        renameDialog.hidden = false;
        renameDialogInput.value = displayNameFor(target.name, target.kind);
        renameDialogInput.select();
        renameDialogInput.focus();
    };

    const getTodayPrefix = () => {
        const today = new Date();
        const pad = (value) => String(value).padStart(2, '0');
        return `${today.getFullYear()}-${pad(today.getMonth() + 1)}-${pad(today.getDate())}`;
    };

    const normalizeNewFileBaseName = (value) => {
        let name = value.trim();
        if (/\.exw$/i.test(name)) name = name.slice(0, -4).trim();
        if (!name || name === '.' || name === '..' || /[\\/\0]/.test(name)) return null;
        return name;
    };

    const createNewFile = async (parentDirHandle, requestedName) => {
        if (!parentDirHandle) return false;
        const baseName = normalizeNewFileBaseName(requestedName);
        if (!baseName) {
            alert(translate('invalidName'));
            return false;
        }

        const fileName = `${getTodayPrefix()} ${baseName}.exw`;
        if (await entryExists(parentDirHandle, fileName)) {
            alert(translate('nameExists'));
            return false;
        }

        const fileHandle = await parentDirHandle.getFileHandle(fileName, { create: true });
        try {
            const writable = await fileHandle.createWritable();
            await writable.write(JSON.stringify({
                type: 'excalidraw', version: 2, elements: [], appState: {}, files: {}
            }));
            await writable.close();
        } catch (error) {
            try { await parentDirHandle.removeEntry(fileName); } catch (cleanupError) {}
            throw error;
        }

        await openExcalidrawFile(fileHandle, parentDirHandle, null);
        if (currentDirHandle) await renderTree(currentDirHandle, document.getElementById('file-tree'), '');
        return true;
    };

    const duplicateFile = async (target) => {
        if (!target || target.kind !== 'file') return;
        if (activeFileHandle && await target.handle.isSameEntry(activeFileHandle)) {
            clearTimeout(saveTimeout);
            await saveCurrentFile(false);
        }

        const sourceFile = await target.handle.getFile();
        const baseName = displayNameFor(target.name, 'file')
            .replace(/^\d{4}-\d{2}-\d{2}\s+/, '')
            .trim() || 'Arquivo';
        const datePrefix = getTodayPrefix();
        let newName = `${datePrefix} ${baseName} - Cópia.exw`;
        let copyNumber = 2;
        while (await entryExists(target.parentDirHandle, newName)) {
            newName = `${datePrefix} ${baseName} - Cópia (${copyNumber}).exw`;
            copyNumber += 1;
        }

        const duplicateHandle = await target.parentDirHandle.getFileHandle(newName, { create: true });
        try {
            const writable = await duplicateHandle.createWritable();
            await writable.write(await sourceFile.arrayBuffer());
            await writable.close();
        } catch (error) {
            try { await target.parentDirHandle.removeEntry(newName); } catch (cleanupError) {}
            throw error;
        }

        if (currentDirHandle) {
            await renderTree(currentDirHandle, document.getElementById('file-tree'), '');
        }
    };

    const openNewFolderDialog = (parentDirHandle) => {
        closeContextMenu();
        dialogMode = 'new-folder';
        renameDialogTarget = null;
        newFolderParentDirHandle = parentDirHandle;
        applyLanguage();
        renameDialog.hidden = false;
        renameDialogInput.value = '';
        renameDialogInput.focus();
    };

    const openNewFileDialog = (parentDirHandle) => {
        if (!parentDirHandle) return;
        closeContextMenu();
        dialogMode = 'new-file';
        renameDialogTarget = null;
        newFileParentDirHandle = parentDirHandle;
        applyLanguage();
        renameDialog.hidden = false;
        renameDialogInput.value = '';
        renameDialogInput.focus();
    };

    contextMenu.addEventListener('click', (event) => event.stopPropagation());
    contextNewFileButton.addEventListener('click', () => {
        const target = contextMenuTarget;
        if (target?.kind === 'directory') openNewFileDialog(target.handle);
        else if (target?.kind === 'blank') openNewFileDialog(target.parentDirHandle);
    });
    contextRenameButton.addEventListener('click', () => {
        if (contextMenuTarget) openRenameDialog(contextMenuTarget);
    });
    contextDuplicateButton.addEventListener('click', async () => {
        const target = contextMenuTarget;
        closeContextMenu();
        try {
            await duplicateFile(target);
        } catch (error) {
            console.error('Erro ao duplicar arquivo:', error);
            alert(translate('duplicateError'));
        }
    });
    contextDeleteButton.addEventListener('click', async () => {
        const target = contextMenuTarget;
        closeContextMenu();
        try {
            await deleteEntry(target);
        } catch (error) {
            console.error('Erro ao excluir entrada:', error);
            alert(translate('deleteError'));
        }
    });
    contextNewFolderButton.addEventListener('click', () => {
        if (contextMenuTarget?.kind === 'blank') {
            openNewFolderDialog(contextMenuTarget.blankParentDirHandle || contextMenuTarget.parentDirHandle);
        }
    });
    fileTree.addEventListener('contextmenu', (event) => {
        if (event.target.closest('#file-tree li')) return;
        const list = event.target.closest('#file-tree ul');
        const blankParentDirHandle = list?.directoryHandle || fileTree.directoryHandle || currentDirHandle;
        const parentDirHandle = currentDirHandle || blankParentDirHandle;
        if (!parentDirHandle) return;
        event.preventDefault();
        event.stopPropagation();
        showContextMenu({
            kind: 'blank',
            parentDirHandle,
            blankParentDirHandle,
            parentPath: list?.dataset.treePath || ''
        }, event.clientX, event.clientY);
    });
    renameDialogCancel.addEventListener('click', closeRenameDialog);
    renameDialog.addEventListener('click', (event) => {
        if (event.target === renameDialog) closeRenameDialog();
    });
    renameDialogForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        if (dialogMode === 'new-folder' || dialogMode === 'new-file') {
            const parentDirHandle = dialogMode === 'new-folder'
                ? newFolderParentDirHandle
                : newFileParentDirHandle;
            renameDialogConfirm.disabled = true;
            renameDialogCancel.disabled = true;
            try {
                const created = dialogMode === 'new-folder'
                    ? await createFolder(parentDirHandle, renameDialogInput.value)
                    : await createNewFile(parentDirHandle, renameDialogInput.value);
                if (parentDirHandle && created) {
                    closeRenameDialog();
                }
            } catch (error) {
                console.error(dialogMode === 'new-folder' ? 'Erro ao criar pasta:' : 'Erro ao criar arquivo:', error);
                alert(translate(dialogMode === 'new-folder' ? 'createFolderError' : 'createFileError'));
            } finally {
                renameDialogConfirm.disabled = false;
                renameDialogCancel.disabled = false;
            }
            return;
        }
        if (!renameDialogTarget) return;
        const target = renameDialogTarget;
        renameDialogConfirm.disabled = true;
        renameDialogCancel.disabled = true;
        try {
            if (await renameEntry(target, renameDialogInput.value)) closeRenameDialog();
        } catch (error) {
            console.error('Erro ao renomear entrada:', error);
            alert(translate('renameError'));
        } finally {
            renameDialogConfirm.disabled = false;
            renameDialogCancel.disabled = false;
        }
    });
    document.addEventListener('click', (event) => {
        if (!contextMenu.hidden && !contextMenu.contains(event.target)) closeContextMenu();
    }, true);
    document.addEventListener('contextmenu', (event) => {
        if (!contextMenu.contains(event.target)) closeContextMenu();
    });
    document.addEventListener('keydown', (event) => {
        if (event.key !== 'Escape') return;
        if (!renameDialog.hidden) closeRenameDialog();
        else closeContextMenu();
    });

    // 2. Refresh Automático Assíncrono (5 segundos)
    setInterval(async () => {
        if (currentDirHandle) {
            await renderTree(currentDirHandle, document.getElementById('file-tree'), "");
        }
    }, 5000);

    // --- GARANTE ARQUIVO TEMPORÁRIO NA RAIZ ---
    async function ensureTemporaryFileExists() {
        if (!currentDirHandle) return null;
        try {
            return await currentDirHandle.getFileHandle('Temporario.exw', { create: false });
        } catch (e) {
            try {
                const tempHandle = await currentDirHandle.getFileHandle('Temporario.exw', { create: true });
                const blank = JSON.stringify({ type: "excalidraw", version: 2, elements: [], appState: {}, files: {} });
                const w = await tempHandle.createWritable();
                await w.write(blank);
                await w.close();
                return tempHandle;
            } catch (createErr) {
                console.error("Erro ao criar o arquivo Temporario automático:", createErr);
                return null;
            }
        }
    }

    // --- ROTINA ASSÍNCRONA DE AUTO-LOAD AO RECARREGAR PÁGINA (F5) ---
    async function checkSavedFolderOnLoad() {
        try {
            const savedHandle = await getFolderHandle();
            if (savedHandle) {
                const perm = await savedHandle.queryPermission({ mode: 'readwrite' });
                if (perm === 'granted') {
                    currentDirHandle = savedHandle;
                    updateFolderButton();
                    const tempHandle = await ensureTemporaryFileExists(); 
                    if (tempHandle) await openExcalidrawFile(tempHandle, currentDirHandle, null);
                    await renderTree(currentDirHandle, document.getElementById('file-tree'), "");
                } else {
                    btnSelect.dataset.action = "reactivate";
                    updateFolderButton();
                }
            }
        } catch (e) { console.error(e); }
    }
    checkSavedFolderOnLoad();

    // 3. Funções de Arquivo
    btnSelect.addEventListener('click', async () => {
        try {
            if (btnSelect.dataset.action === "reactivate") {
                const savedHandle = await getFolderHandle();
                if (savedHandle) {
                    const reqPerm = await savedHandle.requestPermission({ mode: 'readwrite' });
                    if (reqPerm === 'granted') {
                        currentDirHandle = savedHandle;
                        delete btnSelect.dataset.action;
                        updateFolderButton();
                        const tempHandle = await ensureTemporaryFileExists(); 
                        if (tempHandle) await openExcalidrawFile(tempHandle, currentDirHandle, null);
                        await renderTree(currentDirHandle, document.getElementById('file-tree'), "");
                    }
                }
                return;
            }

            currentDirHandle = await window.showDirectoryPicker({ mode: 'readwrite' });
            await saveFolderHandle(currentDirHandle); 
            expandedFolders.clear(); 
            delete btnSelect.dataset.action;
            updateFolderButton();
            
            const tempHandle = await ensureTemporaryFileExists(); 
            if (tempHandle) {
                await openExcalidrawFile(tempHandle, currentDirHandle, null);
            }
            await renderTree(currentDirHandle, document.getElementById('file-tree'), "");
        } catch (e) {}
    });

    async function openExcalidrawFile(fileHandle, parentDirHandle, liElement) {
        if (activeFileHandle) await saveCurrentFile(false); // SafeSwitch

        try {
            const file = await fileHandle.getFile();
            let importedFiles = [];
            try {
                const contents = await file.text();
                const parsed = JSON.parse(contents);
                if (parsed && parsed.files && typeof parsed.files === 'object') {
                    importedFiles = Object.entries(parsed.files)
                        .map(([fileId, binaryFile]) => normalizeBinaryFile(binaryFile, fileId))
                        .filter(Boolean);
                }
            } catch (parseError) {
                // O Excalidraw continua sendo a autoridade para validar o
                // arquivo através do evento drop abaixo.
            }

            activeFileHandle = fileHandle;
            activeParentDirHandle = parentDirHandle;

            const displayName = file.name.replace('.exw', '');
            updateFileStatus('open', displayName);
            document.querySelectorAll('#file-tree li').forEach(el => el.classList.remove('active-file'));
            if (liElement) liElement.classList.add('active-file');

            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(file);
            const target = document.querySelector('.excalidraw-container') || document.body;
            target.dispatchEvent(new DragEvent('drop', { dataTransfer, bubbles: true, cancelable: true }));

            // A carga oficial de JSON já lê data.files. Esta chamada adicional
            // cobre versões que carregam a cena primeiro e os binários depois.
            if (importedFiles.length) {
                const api = await waitForExcalidrawAPI();
                if (api) {
                    try { api.addFiles(importedFiles); } catch (e) {
                        console.warn('Não foi possível restaurar os arquivos binários:', e);
                    }
                }
            }
            
            await ensureTemporaryFileExists();
        } catch (e) { alert(translate('errorLoading')); }
    }

    async function saveCurrentFileNow(isAutoSave = false) {
        if (!activeFileHandle) return false;
        try {
            const scene = readCurrentScene();
            if (!scene) return false;

            updateFileStatus('imagesStillLoading');
            const binaryResult = await collectBinaryFiles(scene.elements);
            if (binaryResult.missing.length) {
                const missingIds = binaryResult.missing.join(', ');
                const message = `${translate('imagesMissing')} (${missingIds})`;
                console.warn(message);
                updateFileStatus('imagesMissing');
                if (!isAutoSave) alert(message);
                return false;
            }

            const data = JSON.stringify({
                type: "excalidraw", version: 2, source: window.location.href,
                elements: scene.elements, appState: scene.appState, files: binaryResult.files
            }, null, 2);

            const w = await activeFileHandle.createWritable();
            await w.write(data); await w.close();

            const displayName = activeFileHandle.name.replace('.exw', '');
            updateFileStatus(isAutoSave ? 'autoSaved' : 'saved', displayName);
            setTimeout(() => {
                if (activeFileHandle) {
                    const currName = activeFileHandle.name.replace('.exw', '');
                    updateFileStatus('open', currName);
                }
            }, 1500);
            return true;
        } catch (e) {
            console.error('Erro ao salvar arquivo Excalidraw:', e);
            if (!isAutoSave) alert(translate('saveError'));
            return false;
        }
    }

    async function saveCurrentFile(isAutoSave = false) {
        const saveOperation = saveQueue.then(() => saveCurrentFileNow(isAutoSave));
        saveQueue = saveOperation.catch(() => false);
        return saveOperation;
    }

    // 4. Renderizador de Árvore Inteligente
    async function renderTree(dirHandle, container, path) {
        container.directoryHandle = dirHandle;
        container.dataset.treePath = path;
        const ul = document.createElement('ul');
        ul.directoryHandle = dirHandle;
        ul.dataset.treePath = path;
        let entries = [];
        try {
            for await (const entry of dirHandle.values()) entries.push(entry);
        } catch(e) { return; } 

        entries.sort((a, b) => a.kind === b.kind ? a.name.localeCompare(b.name) : (a.kind === 'directory' ? -1 : 1));

        for (const entry of entries) {
            if (entry.kind !== 'directory' && !entry.name.endsWith('.exw')) {
                continue;
            }

            const li = document.createElement('li');
            const currentPath = path ? `${path}/${entry.name}` : entry.name;
            li.dataset.treePath = currentPath;
            li.dataset.treeName = entry.name;

            if (entry.kind === 'directory') {
                const isExpanded = expandedFolders.has(currentPath);
                const folderIcon = document.createElement('span');
                folderIcon.className = 'folder-icon';
                folderIcon.textContent = isExpanded ? '📂' : '📁';
                const folderLabel = document.createElement('span');
                folderLabel.className = 'tree-label';
                folderLabel.textContent = entry.name;
                li.append(folderIcon, document.createTextNode(' '), folderLabel);
                
                const childUl = document.createElement('ul');
                childUl.style.display = isExpanded ? 'block' : 'none';
                
                if (isExpanded) {
                    await renderTree(entry, childUl, currentPath);
                }

                li.onclick = async (e) => {
                    e.stopPropagation();
                    const folderPath = li.dataset.treePath;
                    if (childUl.style.display === 'none') {
                        expandedFolders.add(folderPath);
                        await renderTree(entry, childUl, folderPath);
                        childUl.style.display = 'block';
                        li.querySelector('.folder-icon').innerText = '📂';
                    } else {
                        expandedFolders.delete(folderPath);
                        childUl.style.display = 'none';
                        li.querySelector('.folder-icon').innerText = '📁';
                    }
                };
                li.appendChild(childUl);
            } else if (entry.name.endsWith('.exw')) {
                const displayName = entry.name.replace('.exw', '');
                const fileIcon = document.createElement('span');
                fileIcon.className = 'file-icon';
                fileIcon.textContent = '📄';
                const fileLabel = document.createElement('span');
                fileLabel.className = 'tree-label';
                fileLabel.textContent = displayName;
                li.append(fileIcon, document.createTextNode(' '), fileLabel);
                
                if (activeFileHandle && entry.name === activeFileHandle.name) {
                    try {
                       if (await entry.isSameEntry(activeFileHandle)) {
                           li.classList.add('active-file');
                           activeParentDirHandle = dirHandle;
                       }
                    } catch(e){}
                }

                li.onclick = (e) => { e.stopPropagation(); openExcalidrawFile(entry, dirHandle, li); };
            }
            li.addEventListener('contextmenu', (event) => {
                event.preventDefault();
                event.stopPropagation();
                showContextMenu({
                    handle: entry,
                    parentDirHandle: dirHandle,
                    li,
                    kind: entry.kind,
                    name: entry.name,
                    path: li.dataset.treePath,
                    parentPath: path
                }, event.clientX, event.clientY);
            });
            ul.appendChild(li);
        }
        
        container.innerHTML = '';
        container.appendChild(ul);
    }

    // 5. Botões Novo e Excluir
    btnNewFile.addEventListener('click', async () => {
        if (currentDirHandle) {
            openNewFileDialog(currentDirHandle);
            return;
        }
        try {
            const h = await window.showSaveFilePicker({
                suggestedName: `${getTodayPrefix()} Novo.exw`,
                types: [{ description: translate('saveFileDescription'), accept: { 'application/json': ['.exw'] } }]
            });
            const b = JSON.stringify({ type: "excalidraw", version: 2, elements: [], appState: {}, files: {} });
            const w = await h.createWritable(); await w.write(b); await w.close();
            await openExcalidrawFile(h, null, null);
            if (currentDirHandle) await renderTree(currentDirHandle, document.getElementById('file-tree'), "");
        } catch (e) {}
    });

    btnDeleteFile.addEventListener('click', async () => {
        if (!activeFileHandle || !activeParentDirHandle) return alert(translate('selectFile'));
        const target = {
            handle: activeFileHandle,
            parentDirHandle: activeParentDirHandle,
            kind: 'file',
            name: activeFileHandle.name
        };
        try {
            await deleteEntry(target);
        } catch (error) {
            console.error('Erro ao excluir arquivo ativo:', error);
            alert(translate('deleteError'));
        }
    });

    // 6. Eventos de Teclado e LocalStorage
    const originalSetItem = localStorage.setItem;
    localStorage.setItem = function(k, v) {
        originalSetItem.apply(this, arguments);
        if (k === 'excalidraw' && activeFileHandle) {
            clearTimeout(saveTimeout);
            saveTimeout = setTimeout(() => saveCurrentFile(true), 1500);
        }
    };

    window.addEventListener('keydown', async (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 's') {
            if (!activeFileHandle) return;
            e.preventDefault(); e.stopPropagation(); e.stopImmediatePropagation();
            clearTimeout(saveTimeout);
            await saveCurrentFile(false);
        }
    }, { capture: true });

})();

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *       description: "Entrez votre token JWT obtenu via /authentification/login"
 *
 *   schemas:
 *
 *     RegisterInput:
 *       type: object
 *       required: [Nom, Prenom, Email, Mot_de_passe, Role]
 *       properties:
 *         Nom:
 *           type: string
 *           example: Ben Ali
 *         Prenom:
 *           type: string
 *           example: Yassine
 *         Email:
 *           type: string
 *           example: yassine@email.com
 *         Telephone:
 *           type: string
 *           example: "+21698000000"
 *         Mot_de_passe:
 *           type: string
 *           example: MonMotDePasse123
 *         Role:
 *           type: string
 *           enum: [agent, manager, admin]
 *           example: agent
 *
 *     LoginInput:
 *       type: object
 *       required: [Email, Mot_de_passe]
 *       properties:
 *         Email:
 *           type: string
 *           example: yassine@email.com
 *         Mot_de_passe:
 *           type: string
 *           example: MonMotDePasse123
 *
 *     LoginResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           example: Login successful
 *         mytoken:
 *           type: string
 *           example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 *
 *     Client:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: 664abc123def456789012345
 *         Nom:
 *           type: string
 *           example: Trabelsi
 *         Prenom:
 *           type: string
 *           example: Sami
 *         Adresse:
 *           type: string
 *           example: 12 Rue de la Liberté, Tunis
 *         Telephone:
 *           type: string
 *           example: "+21622000000"
 *
 *     ClientInput:
 *       type: object
 *       required: [Nom, Prenom, Adresse]
 *       properties:
 *         Nom:
 *           type: string
 *           example: Trabelsi
 *         Prenom:
 *           type: string
 *           example: Sami
 *         Adresse:
 *           type: string
 *           example: 12 Rue de la Liberté, Tunis
 *         Telephone:
 *           type: string
 *           example: "+21622000000"
 *
 *     Facture:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: 664abc123def456789012346
 *         Numero:
 *           type: string
 *           example: FAC-2024-001
 *         client:
 *           type: string
 *           example: 664abc123def456789012345
 *         Montant:
 *           type: number
 *           example: 1500.00
 *         Statut:
 *           type: string
 *           enum: [Impayées, Payee, "1/2", "3/4"]
 *           example: Impayées
 *         DateEmission:
 *           type: string
 *           format: date
 *           example: "2024-01-15"
 *         DateEcheance:
 *           type: string
 *           format: date
 *           example: "2024-02-15"
 *         Description:
 *           type: string
 *           example: Facture pour prestation de service
 *
 *     FactureInput:
 *       type: object
 *       required: [Numero, client, Montant, DateEmission, DateEcheance]
 *       properties:
 *         Numero:
 *           type: string
 *           example: FAC-2024-001
 *         client:
 *           type: string
 *           example: 664abc123def456789012345
 *         Montant:
 *           type: number
 *           example: 1500.00
 *         Statut:
 *           type: string
 *           enum: [Impayées, Payee, "1/2", "3/4"]
 *           example: Impayées
 *         DateEmission:
 *           type: string
 *           format: date
 *           example: "2024-01-15"
 *         DateEcheance:
 *           type: string
 *           format: date
 *           example: "2024-02-15"
 *         Description:
 *           type: string
 *           example: Facture pour prestation de service
 *
 *     Paiement:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: 664abc123def456789012347
 *         Numero:
 *           type: string
 *           example: PAY-2024-001
 *         Facture:
 *           type: string
 *           example: 664abc123def456789012346
 *         Montant:
 *           type: number
 *           example: 750.00
 *         DatePaiement:
 *           type: string
 *           format: date
 *           example: "2024-01-20"
 *         Mode:
 *           type: string
 *           enum: [virement, cheque, especes, autre]
 *           example: virement
 *         Description:
 *           type: string
 *           example: Paiement partiel de la facture FAC-2024-001
 *
 *     PaiementInput:
 *       type: object
 *       required: [Numero, Facture, Montant, DatePaiement]
 *       properties:
 *         Numero:
 *           type: string
 *           example: PAY-2024-001
 *         Facture:
 *           type: string
 *           example: 664abc123def456789012346
 *         Montant:
 *           type: number
 *           example: 750.00
 *         DatePaiement:
 *           type: string
 *           format: date
 *           example: "2024-01-20"
 *         Mode:
 *           type: string
 *           enum: [virement, cheque, especes, autre]
 *           example: virement
 *         Description:
 *           type: string
 *           example: Paiement partiel de la facture FAC-2024-001
 *
 *     Recouvrement:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: 664abc123def456789012348
 *         Numero:
 *           type: string
 *           example: REC-2024-001
 *         facture:
 *           type: string
 *           example: 664abc123def456789012346
 *         client:
 *           type: string
 *           example: 664abc123def456789012345
 *         typeAction:
 *           type: string
 *           enum: [appel, email, courrier, visite, mise_en_demeure]
 *           example: appel
 *         Date:
 *           type: string
 *           format: date
 *           example: "2024-02-01"
 *         Description:
 *           type: string
 *           example: Appel téléphonique pour rappel de paiement
 *
 *     RecouvrementInput:
 *       type: object
 *       required: [Numero, facture, client, typeAction, Date]
 *       properties:
 *         Numero:
 *           type: string
 *           example: REC-2024-001
 *         facture:
 *           type: string
 *           example: 664abc123def456789012346
 *         client:
 *           type: string
 *           example: 664abc123def456789012345
 *         typeAction:
 *           type: string
 *           enum: [appel, email, courrier, visite, mise_en_demeure]
 *           example: appel
 *         Date:
 *           type: string
 *           format: date
 *           example: "2024-02-01"
 *         Description:
 *           type: string
 *           example: Appel téléphonique pour rappel de paiement
 *
 *     Error:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           example: Une erreur est survenue
 */

/**
 * @swagger
 * tags:
 *   - name: Authentification
 *     description: Inscription et connexion des utilisateurs
 *   - name: Users
 *     description: Gestion des utilisateurs (manager / admin)
 *   - name: Client
 *     description: Gestion des clients (agent / manager / admin)
 *   - name: Facture
 *     description: Gestion des factures (agent / manager / admin)
 *   - name: Paiement
 *     description: Gestion des paiements (agent / manager / admin)
 *   - name: Recouvrement
 *     description: Suivi des actions de recouvrement (agent / manager / admin)
 */

// ═══════════════════════════════════════════════════════════════
//  AUTHENTIFICATION
// ═══════════════════════════════════════════════════════════════

/**
 * @swagger
 * /authentification/register:
 *   post:
 *     summary: Créer un nouveau compte utilisateur
 *     tags: [Authentification]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RegisterInput'
 *     responses:
 *       200:
 *         description: Utilisateur créé avec succès
 *       400:
 *         description: Données invalides
 */

/**
 * @swagger
 * /authentification/login:
 *   post:
 *     summary: Connexion et récupération du token JWT
 *     tags: [Authentification]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginInput'
 *     responses:
 *       200:
 *         description: Connexion réussie
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LoginResponse'
 *       404:
 *         description: Utilisateur introuvable
 *       401:
 *         description: Mot de passe invalide
 */

// ═══════════════════════════════════════════════════════════════
//  USER
// ═══════════════════════════════════════════════════════════════

/**
 * @swagger
 * /user/Create:
 *   post:
 *     summary: Créer un utilisateur
 *     description: Accessible par **manager** et **admin**
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RegisterInput'
 *     responses:
 *       200:
 *         description: Utilisateur créé
 *       401:
 *         description: Token manquant ou invalide
 *       403:
 *         description: Rôle insuffisant
 */

/**
 * @swagger
 * /user/GetAll:
 *   get:
 *     summary: Récupérer tous les utilisateurs
 *     description: Accessible par **manager** et **admin**
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Liste des utilisateurs
 *       401:
 *         description: Token manquant ou invalide
 *       403:
 *         description: Rôle insuffisant
 */

/**
 * @swagger
 * /user/GetById/{id}:
 *   get:
 *     summary: Récupérer un utilisateur par ID
 *     description: Accessible par **manager** et **admin**
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: 664abc123def456789012345
 *     responses:
 *       200:
 *         description: Utilisateur trouvé
 *       401:
 *         description: Token manquant ou invalide
 *       403:
 *         description: Rôle insuffisant
 */

/**
 * @swagger
 * /user/Update/{id}:
 *   put:
 *     summary: Modifier un utilisateur
 *     description: Accessible par **manager** et **admin**
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: 664abc123def456789012345
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RegisterInput'
 *     responses:
 *       200:
 *         description: Utilisateur modifié
 *       401:
 *         description: Token manquant ou invalide
 *       403:
 *         description: Rôle insuffisant
 */

/**
 * @swagger
 * /user/Delete/{id}:
 *   delete:
 *     summary: Supprimer un utilisateur
 *     description: Accessible par **admin** uniquement
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: 664abc123def456789012345
 *     responses:
 *       200:
 *         description: Utilisateur supprimé
 *       401:
 *         description: Token manquant ou invalide
 *       403:
 *         description: Rôle insuffisant
 */

// ═══════════════════════════════════════════════════════════════
//  CLIENT
// ═══════════════════════════════════════════════════════════════

/**
 * @swagger
 * /client/Create:
 *   post:
 *     summary: Créer un nouveau client
 *     description: Accessible par **agent**, **manager** et **admin**
 *     tags: [Client]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ClientInput'
 *     responses:
 *       200:
 *         description: Client créé avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Client'
 *       401:
 *         description: Token manquant ou invalide
 *       403:
 *         description: Rôle insuffisant
 */

/**
 * @swagger
 * /client/GetAll:
 *   get:
 *     summary: Récupérer tous les clients
 *     description: Accessible par **agent**, **manager** et **admin**
 *     tags: [Client]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Liste de tous les clients
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Client'
 *       401:
 *         description: Token manquant ou invalide
 */

/**
 * @swagger
 * /client/GetById/{id}:
 *   get:
 *     summary: Récupérer un client par ID
 *     description: Accessible par **agent**, **manager** et **admin**
 *     tags: [Client]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: 664abc123def456789012345
 *     responses:
 *       200:
 *         description: Client trouvé
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Client'
 *       401:
 *         description: Token manquant ou invalide
 *       404:
 *         description: Client introuvable
 */

/**
 * @swagger
 * /client/Update/{id}:
 *   put:
 *     summary: Modifier un client
 *     description: Accessible par **agent**, **manager** et **admin**
 *     tags: [Client]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: 664abc123def456789012345
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ClientInput'
 *     responses:
 *       200:
 *         description: Client mis à jour
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Client'
 *       401:
 *         description: Token manquant ou invalide
 */

/**
 * @swagger
 * /client/Delete/{id}:
 *   delete:
 *     summary: Supprimer un client
 *     description: Accessible par **manager** et **admin** uniquement
 *     tags: [Client]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: 664abc123def456789012345
 *     responses:
 *       200:
 *         description: Client supprimé avec succès
 *       401:
 *         description: Token manquant ou invalide
 *       403:
 *         description: Rôle insuffisant
 */

// ═══════════════════════════════════════════════════════════════
//  FACTURE
// ═══════════════════════════════════════════════════════════════

/**
 * @swagger
 * /facture/Create:
 *   post:
 *     summary: Créer une nouvelle facture
 *     description: Accessible par **agent**, **manager** et **admin**
 *     tags: [Facture]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/FactureInput'
 *     responses:
 *       200:
 *         description: Facture créée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Facture'
 *       401:
 *         description: Token manquant ou invalide
 */

/**
 * @swagger
 * /facture/GetAll:
 *   get:
 *     summary: Récupérer toutes les factures
 *     description: Accessible par **agent**, **manager** et **admin**
 *     tags: [Facture]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Liste de toutes les factures
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Facture'
 *       401:
 *         description: Token manquant ou invalide
 */

/**
 * @swagger
 * /facture/GetById/{id}:
 *   get:
 *     summary: Récupérer une facture par ID
 *     description: Accessible par **agent**, **manager** et **admin**
 *     tags: [Facture]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: 664abc123def456789012346
 *     responses:
 *       200:
 *         description: Facture trouvée
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Facture'
 *       401:
 *         description: Token manquant ou invalide
 *       404:
 *         description: Facture introuvable
 */

/**
 * @swagger
 * /facture/Update/{id}:
 *   put:
 *     summary: Modifier une facture
 *     description: Accessible par **agent**, **manager** et **admin**
 *     tags: [Facture]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: 664abc123def456789012346
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/FactureInput'
 *     responses:
 *       200:
 *         description: Facture mise à jour
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Facture'
 *       401:
 *         description: Token manquant ou invalide
 */

/**
 * @swagger
 * /facture/Delete/{id}:
 *   delete:
 *     summary: Supprimer une facture
 *     description: Accessible par **manager** et **admin** uniquement
 *     tags: [Facture]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: 664abc123def456789012346
 *     responses:
 *       200:
 *         description: Facture supprimée avec succès
 *       401:
 *         description: Token manquant ou invalide
 *       403:
 *         description: Rôle insuffisant
 */

// ═══════════════════════════════════════════════════════════════
//  PAIEMENT
// ═══════════════════════════════════════════════════════════════

/**
 * @swagger
 * /paiement/Create:
 *   post:
 *     summary: Enregistrer un paiement
 *     description: Accessible par **agent**, **manager** et **admin**
 *     tags: [Paiement]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PaiementInput'
 *     responses:
 *       200:
 *         description: Paiement enregistré avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Paiement'
 *       401:
 *         description: Token manquant ou invalide
 */

/**
 * @swagger
 * /paiement/GetAll:
 *   get:
 *     summary: Récupérer tous les paiements
 *     description: Accessible par **agent**, **manager** et **admin**
 *     tags: [Paiement]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Liste de tous les paiements
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Paiement'
 *       401:
 *         description: Token manquant ou invalide
 */

/**
 * @swagger
 * /paiement/GetById/{id}:
 *   get:
 *     summary: Récupérer un paiement par ID
 *     description: Accessible par **agent**, **manager** et **admin**
 *     tags: [Paiement]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: 664abc123def456789012347
 *     responses:
 *       200:
 *         description: Paiement trouvé
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Paiement'
 *       401:
 *         description: Token manquant ou invalide
 *       404:
 *         description: Paiement introuvable
 */

/**
 * @swagger
 * /paiement/Update/{id}:
 *   put:
 *     summary: Modifier un paiement
 *     description: Accessible par **agent**, **manager** et **admin**
 *     tags: [Paiement]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: 664abc123def456789012347
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PaiementInput'
 *     responses:
 *       200:
 *         description: Paiement mis à jour
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Paiement'
 *       401:
 *         description: Token manquant ou invalide
 */

/**
 * @swagger
 * /paiement/Delete/{id}:
 *   delete:
 *     summary: Supprimer un paiement
 *     description: Accessible par **manager** et **admin** uniquement
 *     tags: [Paiement]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: 664abc123def456789012347
 *     responses:
 *       200:
 *         description: Paiement supprimé avec succès
 *       401:
 *         description: Token manquant ou invalide
 *       403:
 *         description: Rôle insuffisant
 */

// ═══════════════════════════════════════════════════════════════
//  RECOUVREMENT
// ═══════════════════════════════════════════════════════════════

/**
 * @swagger
 * /recouvrement/Create:
 *   post:
 *     summary: Créer une action de recouvrement
 *     description: Accessible par **agent**, **manager** et **admin**
 *     tags: [Recouvrement]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RecouvrementInput'
 *     responses:
 *       200:
 *         description: Action de recouvrement créée
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Recouvrement'
 *       401:
 *         description: Token manquant ou invalide
 */

/**
 * @swagger
 * /recouvrement/GetAll:
 *   get:
 *     summary: Récupérer toutes les actions de recouvrement
 *     description: Accessible par **agent**, **manager** et **admin**
 *     tags: [Recouvrement]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Liste de toutes les actions
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Recouvrement'
 *       401:
 *         description: Token manquant ou invalide
 */

/**
 * @swagger
 * /recouvrement/GetById/{id}:
 *   get:
 *     summary: Récupérer une action de recouvrement par ID
 *     description: Accessible par **agent**, **manager** et **admin**
 *     tags: [Recouvrement]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: 664abc123def456789012348
 *     responses:
 *       200:
 *         description: Action trouvée
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Recouvrement'
 *       401:
 *         description: Token manquant ou invalide
 *       404:
 *         description: Action introuvable
 */

/**
 * @swagger
 * /recouvrement/Update/{id}:
 *   put:
 *     summary: Modifier une action de recouvrement
 *     description: Accessible par **agent**, **manager** et **admin**
 *     tags: [Recouvrement]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: 664abc123def456789012348
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RecouvrementInput'
 *     responses:
 *       200:
 *         description: Action mise à jour
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Recouvrement'
 *       401:
 *         description: Token manquant ou invalide
 */

/**
 * @swagger
 * /recouvrement/Delete/{id}:
 *   delete:
 *     summary: Supprimer une action de recouvrement
 *     description: Accessible par **manager** et **admin** uniquement
 *     tags: [Recouvrement]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: 664abc123def456789012348
 *     responses:
 *       200:
 *         description: Action supprimée avec succès
 *       401:
 *         description: Token manquant ou invalide
 *       403:
 *         description: Rôle insuffisant
 */
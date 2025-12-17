 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/README.md b/README.md
index 3db48c4cce7c6efe692d39f1d201124e79d02b94..fb71f0b92719dda54029360f97d08410cb3f9f8d 100644
--- a/README.md
+++ b/README.md
@@ -1 +1,12 @@
 # Claim Handling Solutions
+
+Een statische website met een moderne layout voor Claim Handling Solutions. De pagina bevat:
+
+- Een sticky navigatiebalk met uitklapbaar menu voor mobiel.
+- Hero-sectie met call-to-actions.
+- Overzicht van diensten, aanpak en praktijkcase.
+- Contactformulier en vaste WhatsApp-knop voor direct contact.
+
+## Website lokaal bekijken
+
+Open `index.html` in je browser of start een eenvoudige webserver (bijvoorbeeld `python -m http.server`) in de root van deze repository.
 
EOF
)

package it.alessiomontanari.login;

import android.content.Intent;
import android.view.View;
import android.widget.EditText;
import androidx.appcompat.app.AppCompatActivity;
import android.os.Bundle;
import com.google.android.material.button.MaterialButton;
import it.alessiomontanari.R;

public class LoginActivity extends AppCompatActivity {


    String password;
    String nomeUtente;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);
    }

    public void ControlloParametri(View v) {
        EditText Eusername = findViewById(R.id.InputNome);
        EditText Epassword = findViewById(R.id.InputPassword);

        Intent iCodice = new Intent(this, CodiceActivity.class);

        iCodice.putExtra("username", Eusername.getText().toString());
        iCodice.putExtra("password", Epassword.getText().toString());

        startActivity(iCodice);
    }

/*
    private boolean connessioneDatabase() {
        Connection conn = null;
        String url = "sql780.main-hosting.eu";
        String username = "u221049142_pc";
        String password = "protezione_civile_5INF2";

        try {
            conn = DriverManager.getConnection(url, username, password);
            System.out.println("Connesso al database");
            return true;
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        } /*finally {
            try {
                if (conn != null) {
                    conn.close();
                    System.out.println("Disconnesso dal database");
                }
            } catch (SQLException ex) {
                System.out.println(ex.getMessage());
            }
        }
        return false;
    }


    public void ControlloParametri(View v){
        EditText Eusername = findViewById(R.id.InputNome);
        nomeUtente = Eusername.getText().toString();
        EditText Epassword = findViewById(R.id.InputPassword);
        password = Epassword.getText().toString();

        if (!connessioneDatabase())
            return;

        if (checkLogin()) {
            // Utente autenticato con le credenziali corrette
            Intent mappa = new Intent(this, MappaActivity.class);
            mappa.putExtra("Nome", Eusername);
            mappa.putExtra("Codice", ECodice);
            startActivity(mappa);
            Intent codice = new Intent(this, CodiceActivity.class);
            codice.putExtra("", EId);
            startActivity(codice);
        }
    }

    // URL del database
    private final String DATABASE_URL = "jdbc:mysql://yourdatabaseurl.com:3306/yourdatabasename";
    // Username e password del database
    private final String DATABASE_USERNAME = "username";
    private final String DATABASE_PASSWORD = "pw";

    public boolean checkLogin() {
        try {
            // Carica il driver JDBC
            Class.forName("com.mysql.jdbc.Driver");

            // Crea la connessione al database
            Connection connection = DriverManager.getConnection(DATABASE_URL, DATABASE_USERNAME, DATABASE_PASSWORD);

            // Crea una query per cercare l'utente con il nome utente e la password inseriti
            String query = "SELECT * FROM users WHERE username='" + nomeUtente + "' AND pw='" + password + "'";

            // Crea uno statement per eseguire la query
            Statement statement = connection.createStatement();

            String queryLogin = "SELECT c.IdVolontarioPk FROM credenziali_utente AS c WHERE username = nomeUtente AND pw = password";

            // Esegue la query e ottiene il risultato
            ResultSet resultSet = statement.executeQuery(query);

            // Controlla se il risultato contiene almeno una riga
            if (resultSet.next()) {
                return true;

            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        return false;
    }
*/
}
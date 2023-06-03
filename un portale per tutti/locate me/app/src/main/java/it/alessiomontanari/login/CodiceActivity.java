package it.alessiomontanari.login;

import android.annotation.SuppressLint;
import android.content.Intent;
import android.view.ViewGroup;
import android.widget.ListView;
import android.widget.TextView;
import androidx.appcompat.app.AppCompatActivity;
import android.widget.ArrayAdapter;
import android.os.Bundle;
import android.view.View;
import it.alessiomontanari.MapsActivity;
import it.alessiomontanari.R;

public class CodiceActivity extends AppCompatActivity {

    Intent intent;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_codice);
        intent = getIntent();
        CodiceActivity context = this;

        @SuppressLint({"MissingInflatedId", "LocalSuppress"}) ListView listView = findViewById(R.id.listView);
        listView.setOnItemClickListener((adapterView, view, i, l) -> {
            Intent iMappa = new Intent(context, MapsActivity.class);

            String username = intent.getStringExtra("username");
            String password = intent.getStringExtra("password");
            String code = listView.getItemAtPosition(i).toString();

            iMappa.putExtra("username", username);
            iMappa.putExtra("password", password);
            iMappa.putExtra("missionCode", code);
            iMappa.putExtra("check", true);

            startActivity(iMappa);
        });

        ArrayAdapter<String> adapter = new ArrayAdapter<String>(
                this,
                R.layout.list_item,
                R.id.tv_content,
                new String[]{"provaCodice1", "provaCodice2", "provaCodice3"}) {
            @SuppressLint("SetTextI18n")
            @Override
            public View getView(int position, View convertView, ViewGroup parent) {
                View view = super.getView(position, convertView, parent);
                TextView tvTitle = view.findViewById(R.id.tv_title);
                tvTitle.setText("Codice " + position + " :");
                return view;
            }
        };
        listView.setAdapter(adapter);
    }
/*
    public void ApriMappa(View v){

    }
*/
}
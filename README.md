This app just creates a GET/SET endpoint on a webapp which you can deploy on a Google Cloud App Engine instance.

What makes this file a Google Cloud App Engine file is that it includes an app.yaml file, which determines what environment we are using (nodejs10, standard)

To test out:
npm start

To deploy:
gcloud app deploy
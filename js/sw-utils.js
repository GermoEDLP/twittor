//Guardar cache dinamico

function actualizarCacheDinamico(cache, req, res) {

    if (res.ok) {

        return caches.open(cache).then(cacheO => {
            cacheO.put(req, res.clone());

            return res.clone();
        });

    } else {
        return res;
    }

}
/// <reference types="@sveltejs/kit" />
/// <reference types="@sveltejs/adapter-cloudflare" />

declare namespace App {
	interface Platform {
		env?: {
			kvSpace: KVNamespace;
			ccti3d: DurableObjectNamespace;
		};
	}
}